(function() {

  var module = angular.module('loom_layers_directive', []);

  module.directive('loomLayers',
      function($rootScope, mapService, serverService, historyService, featureManagerService,
               dialogService, $translate, tableViewService, configService) {
        return {
          restrict: 'C',
          replace: true,
          templateUrl: 'layers/partials/layers.tpl.html',
          link: function(scope) {
            scope.mapService = mapService;
            scope.featureManagerService = featureManagerService;
            scope.tableViewService = tableViewService;
            scope.zooming = false;
            scope.toggleVisibility = function(layer) {
              layer.setVisible(!layer.get('visible'));
            };

            scope.toggleAttributeVisibility = function(attribute) {
              attribute.visible = !attribute.visible;
            };

            scope.removeLayer = function(layer) {
              dialogService.warn($translate.instant('remove_layer'), $translate.instant('sure_remove_layer'),
                  [$translate.instant('yes_btn'), $translate.instant('no_btn')], false).then(function(button) {
                switch (button) {
                  case 0:
                    mapService.map.removeLayer(layer);
                    $rootScope.$broadcast('layerRemoved', layer);
                    break;
                  case 1:
                    break;
                }
              });
            };

            scope.zoomToData = function(layer) {
              scope.zooming = true;
              mapService.zoomToLayerFeatures(layer).then(function() {
                scope.zooming = false;
              });
            };

            scope.reorderLayer = function(startIndex, endIndex) {
              var length = mapService.map.getLayers().getArray().length - 1;
              var layer = mapService.map.removeLayer(mapService.map.getLayers().item(length - startIndex));
              mapService.map.getLayers().insertAt(length - endIndex, layer);
            };

            scope.filterInternalLayers = function(layer) {
              return !(!goog.isDefAndNotNull(layer.get('metadata')) ||
                  (goog.isDefAndNotNull(layer.get('metadata').vectorEditLayer) &&
                      layer.get('metadata').vectorEditLayer) ||
                  (goog.isDefAndNotNull(layer.get('metadata').spatialFilterLayer) &&
                      layer.get('metadata').spatialFilterLayer));
            };

            scope.isGeogig = function(layer) {
              if (goog.isDefAndNotNull(layer)) {
                var metadata = layer.get('metadata');
                if (goog.isDefAndNotNull(metadata)) {
                  if (goog.isDefAndNotNull(metadata.isGeoGig) && metadata.isGeoGig) {
                    return metadata.isGeoGig;
                  }
                }
              }
              return false;
            };

            scope.isLoadingStyle = function(layer) {
              var loadingStyle = layer.get('metadata').loadingStyle;
              return goog.isDefAndNotNull(loadingStyle) && loadingStyle === true;
            };
            scope.hasStylePermissions = function(layer) {
              var exchangeMetadata = layer.get('exchangeMetadata');
              var has_perms = false;
              if (goog.isDefAndNotNull(exchangeMetadata) && goog.isDefAndNotNull(exchangeMetadata.permissions)) {
                // check for any raster attributes.
                var attrs = exchangeMetadata.attributes;
                for (var i = 0, ii = attrs.length; i < ii; i++) {
                  // exit early if a raster attribute is found.
                  if (attrs[i].attribute_type === 'raster') {
                    return false;
                  }
                }

                var permissions = exchangeMetadata.permissions;
                var is_remote = exchangeMetadata.remote;
                if (goog.isDefAndNotNull(permissions) && !is_remote) {
                  has_perms = permissions.edit_style;
                }
              }
              return has_perms;
            };

            scope.toggleStyleControl = function(layer) {
              var showStylePanel = layer.get('metadata').showStylePanel;
              if (!goog.isDefAndNotNull(showStylePanel)) {
                layer.get('metadata').showStylePanel = true;
              } else {
                layer.get('metadata').showStylePanel = !showStylePanel;
              }
            };

            scope.saveLayerStyle = function(layer) {
              if (goog.isDefAndNotNull(layer.get('metadata').defaultStyle)) {
                var loading = layer.get('metadata').loadingStyle || true;
                if (goog.isDefAndNotNull(loading) && loading) {
                  layer.get('metadata').loadingStyle = true;
                  mapService.updateStyle(layer).then(function() {
                    layer.get('metadata').loadingStyle = false;
                  }, function() {
                    layer.get('metadata').loadingStyle = false;
                    dialogService.error($translate.instant('save_layer_style'),
                        $translate.instant('style_layer_failed',
                            { 'style_name': layer.get('metadata').defaultStyle.name}));
                  });
                }
              }
            };

            scope.isLoadingTable = function(layer) {
              var loadingTable = layer.get('metadata').loadingTable;
              return goog.isDefAndNotNull(loadingTable) && loadingTable === true;
            };

            scope.showTable = function(layer) {
              layer.get('metadata').loadingTable = true;
              tableViewService.showTable(layer).then(function() {
                layer.get('metadata').loadingTable = false;
                $('#table-view-window').modal('show');
              }, function() {
                layer.get('metadata').loadingTable = false;
                dialogService.error($translate.instant('show_table'),
                    $translate.instant('show_table_failed'));
              });
            };

            scope.isLoadingHeatmap = function(layer) {
              var loading = layer.get('metadata').loadingHeatmap;
              return goog.isDefAndNotNull(loading) && loading === true;
            };

            scope.showHeatmap = function(layer) {
              layer.get('metadata').loadingHeatmap = true;
              mapService.showHeatmap(layer);
            };

            scope.isLoadingHistory = function(layer) {
              var loadingHistory = layer.get('metadata').loadingHistory;
              return goog.isDefAndNotNull(loadingHistory) && loadingHistory === true;
            };

            scope.showHistory = function(layer) {
              historyService.setTitle($translate.instant('history_for', {value: layer.get('metadata').title}));
              layer.get('metadata').loadingHistory = true;
              var promise = historyService.getHistory(layer);
              if (goog.isDefAndNotNull(promise)) {
                promise.then(function() {
                  layer.get('metadata').loadingHistory = false;
                }, function() {
                  layer.get('metadata').loadingHistory = false;
                });
              } else {
                layer.get('metadata').loadingHistory = false;
              }
            };

            scope.getAttrList = function(layer) {
              var attrList = [];

              for (var i in layer.get('metadata').schema) {
                if (layer.get('metadata').schema[i]._type.search('gml:') > -1) {
                  continue;
                }
                attrList.push(layer.get('metadata').schema[i]);
              }
              return attrList;
            };

            scope.getLayerInfo = function(layer) {
              $rootScope.$broadcast('getLayerInfo', layer);
            };

            scope.getLayerAttributeVisibility = function(layer) {
              $rootScope.$broadcast('getLayerAttributeVisibility', layer);
            };

            scope.canZoom = function(layer) {
              // ensure the projection is "zoomable".
              var metadata = layer.get('metadata');
              if (metadata.bbox) {
                var layer_crs = metadata.bbox.crs ? metadata.bbox.crs : metadata.bbox.extent.crs;
                return (ol.proj.get(layer_crs) !== undefined);
              }
              return false;
            };

            scope.updateStyleChoices = function(styleChoices) {
              var overrides = {
                fontFamily: ['serif', 'sans-serif']
              };

              return Object.assign({}, styleChoices, overrides);
            };

            scope.initializeOpacity = function(layer) {
              // Heatmap layers do not get a config object with a default opacity.
              // Let's initialize it here so that everything else can work properly.
              if (_.isNil(_.get(layer.get('metadata'), 'config.opacity'))) {
                _.set(layer.get('metadata'), 'config.opacity', layer.getOpacity());
              }
            };
          }
        };
      }
  );
})();
