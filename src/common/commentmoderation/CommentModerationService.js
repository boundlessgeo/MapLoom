(function() {
  var module = angular.module('loom_comment_moderation_service', []);

  module.provider('commentModerationService', function() {

    var log = this.log = [];
    var updateCount = this.updateCount = 0;
    var commentModerationService;

    this.$get = function($translate, $q, $http, mapService, $rootScope, $compile) {
      var jsonReader = new ol.format.GeoJSON();
      var vectorSource = this.vectorSource = new ol.source.Vector();
      var popup = new ol.Overlay({
        element: document.getElementById('comment-view-box'),
        id: 'comment-view-box'
      });

      this.commentsEnabled = false;
      this.editCommentPermission = false;



      this.refreshComments = function() {
        var baseURL = '/maps/' + mapService.id + '/comments';
        return $http({method: 'GET', url: baseURL}).then(function(resp) {
          log.length = 0;
          this.editCommentPermission = resp.data.staff;
          log.push.apply(log, jsonReader.readFeatures(resp.data));
          ++updateCount;
          for (var i = 0; i < log.length; ++i) {
            log[i].getGeometry().transform(new ol.proj.Projection({code: 'EPSG:4326'}),
                mapService.map.getView().getProjection());
          }
          vectorSource.clear();
          vectorSource.addFeatures(log);
        }.bind(this));
      };

      console.log(this.editCommentPermission);

      this.title = $translate.instant('comments');
      this.summaryMode = false;
      this.latestDraw = undefined;

      this.drawControl = new ol.interaction.Draw({
        source: this.vectorSource,
        type: 'Point'
      });

      this.drawControl.on('drawend', function(drawEvt) {
        this.latestDraw = drawEvt.feature;
        $('#commentAddWindow').modal('toggle');
        mapService.map.removeInteraction(this.drawControl);
        mapService.map.addInteraction(this.selectControl);
      }.bind(this));

      this.selectControl = new ol.interaction.Select({
        condition: ol.events.condition.click
      });

      this.selectControl.on('select', function(evt) {
        var item = evt.selected[0];
        if (item && item.values_ && item.id_) {
          mapService.map.addOverlay(popup);
          var childScope = $rootScope.$new();
          childScope.item = item;
          childScope.commentModerationService = commentModerationService;
          childScope.mapService = mapService;
          $compile(mapService.map.getOverlayById('comment-view-box').getElement())(childScope);
          popup.setPosition(item.getGeometry().flatCoordinates);
        } else {
          mapService.map.removeOverlay(popup);
        }
      });

      mapService.map.once('postrender', function() {
        $http({
          method: 'GET',
          url: '/maps/' + mapService.id + '/setComments'
        }).then(function(resp) {

          var fill = new ol.style.Fill({
            color: 'rgba(51, 153, 204,0.9)'
          });
          var stroke = new ol.style.Stroke({
            color: '#1919FF',
            width: 1.5
          });
          var style = [
            new ol.style.Style({
              image: new ol.style.Circle({
                fill: fill,
                stroke: stroke,
                radius: 7
              }),
              fill: fill,
              stroke: stroke
            })
          ];
          this.commentsEnabled = resp.data.enabled;
          mapService.commentsEnabled = resp.data.enabled;
          if (this.commentsEnabled) {
            this.vectorLayer = new ol.layer.Vector({source: this.vectorSource, metadata: {
              title: 'Comments', uniqueID: 'comments', config: {}, bbox: {crs: mapService.map.getView().getProjection()}},
                        style: style
            });
            mapService.map.addLayer(this.vectorLayer);
            mapService.map.addInteraction(this.selectControl);
            this.refreshComments();
          }
        }.bind(this));
      }.bind(this));

      this.timeSearch = function(startTime, endTime) {
        var baseURL = '/maps/' + mapService.id + '/comments';
        return $http({method: 'GET', url: baseURL + '?start_date=' + startTime +
              '&end_date=' + endTime}).then(function(resp) {
          return jsonReader.readFeatures(resp.data);
        });
      };

      this.csvExport = function(startTime, endTime) {
        var baseURL = '/maps/' + mapService.id + '/comments';
        return baseURL + '?csv=True&start_date=' + startTime + '&end_date=' + endTime;
      };

      this.addComment = function(title, message, category, location) {
        if (location) {
          location.transform(mapService.map.getView().getProjection(), new ol.proj.Projection({code: 'EPSG:4326'}));
          location = new ol.format.GeoJSON().writeGeometry(location);
        }
        var baseURL = '/maps/' + mapService.id + '/comments';
        return $http({
          method: 'POST',
          url: baseURL,
          headers: {'Content-Type': 'application/x-www-form-urlencoded'},
          xsrfCookieName: 'csrftoken',
          xsrfHeaderName: 'X-CSRFToken',
          data: $.param({
            title: title,
            message: message,
            category: category,
            feature_geom: location,
            map_id: mapService.id
          })
        });
      };

      this.modifyComment = function(id, status) {
        var baseURL = '/maps/' + mapService.id + '/comments';
        return $http({
          method: 'PUT',
          url: baseURL,
          headers: {'Content-Type': 'application/x-www-form-urlencoded'},
          xsrfCookieName: 'csrftoken',
          xsrfHeaderName: 'X-CSRFToken',
          data: $.param({
            id: id,
            status: status
          })
        }).then(function(resp) {
          this.refreshComments();
          return resp;
        }.bind(this));
      };

      this.enableSummaryMode = function() {
        this.refreshComments();
        this.summaryMode = true;
        this.title = $translate.instant('comment_summary');
      };

      this.enableLatestMode = function() {
        this.summaryMode = false;
        this.title = $translate.instant('comments');
      };

      this.addCommentMode = function() {
        mapService.map.addInteraction(this.drawControl);
        mapService.map.removeInteraction(this.selectControl);
      };

      this.setCommentMode = function(enabled) {
        return $http({
          method: 'POST',
          url: '/maps/' + mapService.id + '/setComments',
          headers: {'Content-Type': 'application/x-www-form-urlencoded'},
          xsrfCookieName: 'csrftoken',
          xsrfHeaderName: 'X-CSRFToken',
          data: $.param({
            enabled: enabled
          })
        });
      };

      commentModerationService = this;
      return this;
    };

  });

}());
