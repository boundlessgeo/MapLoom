(function() {

  var module = angular.module('loom_add_comment_directive', []);

  module.directive('loomAddComment',
      function($rootScope, commentModerationService) {
        return {
          templateUrl: 'commentmoderation/partial/addcomment.tpl.html',
          link: function(scope, element, attrs) {
            scope.active = true;
            scope.contentHidden = true;
            scope.isLoading = false;

            scope.categoryOptions = [
              {value: 'Safety', label: 'Safety'},
              {value: 'Maintenance', label: 'Maintenance'},
              {value: 'TrafficCongestion', label: 'Traffic Congestion'},
              {value: 'IntersectionRelated', label: 'Intersection-Related'},
              {value: 'TransitRouteStop', label: 'Transit Route/Stop'},
              {value: 'OnRoadBikeFacility', label: 'On-Road Bike Facility'},
              {value: 'OffRoadPathTrail', label: 'Off-Road Path Trail'},
              {value: 'Sidewalk', label: 'Sidewalk'},
              {value: 'Other', label: 'Other'}
            ];

            scope.model = {
              message: '',
              title: '',
              category: scope.categoryOptions[8],
              acknowledged: false
            };


            element.closest('.modal').on('hidden.bs.modal', function(e) {
              if (!scope.$$phase && !$rootScope.$$phase) {
                scope.$apply(function() {
                  scope.contentHidden = true;
                });
              } else {
                scope.contentHidden = true;
              }
            });
            element.closest('.modal').on('show.bs.modal', function(e) {
              if (!scope.$$phase && !$rootScope.$$phase) {
                scope.$apply(function() {
                  scope.contentHidden = false;
                });
              } else {
                scope.contentHidden = false;
              }
              scope.latestDraw = commentModerationService.latestDraw;

            });

            scope.cancel = function() {
              element.closest('.modal').modal('hide');
              scope.isLoading = false;
              scope.model.message = '';
              scope.model.title = '';
              scope.category = scope.categoryOptions[8];
              scope.acknowledged = false;
            };

            scope.submit = function() {
              commentModerationService.addComment(scope.model.title, scope.model.message, scope.model.category.value,
                  scope.latestDraw.getGeometry()).then(function() {
                             element.closest('.modal').modal('hide');
                             scope.isLoading = false;
                             commentModerationService.refreshComments();
              });
            };

          }
        };
      }
  );
})();
