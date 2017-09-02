(function() {

  var module = angular.module('loom_pie_directive', []);

  module.directive('loomPie',
      function(mapService, tableViewService, statisticsService, $timeout) {
        return {
          replace: true,
          templateUrl: 'charts/partials/pie.tpl.html',
          link: function(scope, element) {
            scope.template = window.TEMPLATE;
            if (window.TEMPLATE === 'pie') {
              runDirective();
            }
            $(window.document.body).bind('enable-pie', function(evt, enabled) {
              $timeout(function() {
                scope.template = 'pie';
                runDirective();
              });
            });
            function runDirective() {

              scope.selected = 'pie';
              $('#switch-coords-border').css('bottom', '202px');

              scope.model = {
                layerSelected: undefined,
                attributeSelected: undefined,
                availableAttributes: undefined
              };

              scope.data = null;

              scope.overrideDimensions = true;
              scope.divHeight = 150;
              scope.divWidth = 500;
              scope.overrideYTicks = 4;

              scope.mapService = mapService;
              scope.layers = mapService.map.getLayers().getArray();

              //This is ugly, but basically waits until the selected layer is loaded,
              // then sets the selected layer, then sets the selected attribute, finally
              // it then unsubscribes from both angular and openlayer events
              if (window.CHART_LAYER && window.CHART_ATTRIBUTE) {
                var removeListener;
                var mapListener = mapService.map.getLayerGroup().on('change', function() {
                  var newLayer = _.findIndex(scope.layers, function(item) {
                    return item.get('metadata').uniqueID === window.CHART_LAYER;
                  });

                  if (newLayer !== -1) {
                    $timeout(function() {
                      scope.model.layerSelected = window.CHART_LAYER;
                    });
                    if (!removeListener) {
                      removeListener = scope.$watch('model.availableAttributes', function(attributes) {
                        if (attributes) {
                          var attr = _.findIndex(attributes, function(item) {
                            return item.name === window.CHART_ATTRIBUTE;
                          });
                          $timeout(function() {
                            scope.model.attributeSelected = scope.model.availableAttributes[attr];
                          });
                          removeListener();
                          mapService.map.getLayerGroup().unByKey(mapListener);
                        }
                      });
                    }
                  }
                });
              }

              scope.$watch('model.layerSelected', function(newVal, oldVal) {
                if (newVal) {
                  var newLayer = _.find(scope.layers, function(item) {
                    return item.get('metadata').uniqueID === newVal;
                  });
                  tableViewService.selectedLayer = newLayer;
                  tableViewService.restrictionList = {};
                  window.CHART_LAYER = newVal;
                  tableViewService.loadData().then(function(stats) {
                    scope.model.availableAttributes = tableViewService.attributeNameList;
                  });
                }
              });
              scope.editable = window.EDITABLE;

              $(window.document.body).bind('editable', function(evt, enabled) {
                $timeout(function() {
                  scope.editable = enabled;
                });
              });

              scope.$watch('model.attributeSelected', function(newVal) {
                if (newVal) {
                  var layer = _.find(scope.layers, function(item) {
                    return item.get('metadata').uniqueID === scope.model.layerSelected;
                  });
                  window.CHART_ATTRIBUTE = newVal.name;
                  statisticsService.summarizeAttribute(layer,
                      [], newVal.name).then(function(statistics) {
                    scope.data = statistics;
                    $('#statistics-chart-area').height(200);
                  });
                }
              });
            }
          }
        };
      }
  );
})();
