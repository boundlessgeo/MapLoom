(function() {

  var module = angular.module('loom_sharemap_directive', ['ngclipboard']);

  module.directive('loomShareMap',
      function(mapService, $window, $translate) {
        return {
          restrict: 'AC',
          templateUrl: 'map/partial/sharemap.tpl.html',
          link: function(scope, element, attrs) {
            scope.mapService = mapService;
            scope.translate = $translate;

            function onResize() {
              var height = $(window).height();
              element.children('.modal-body').css('max-height', (height - 200).toString() + 'px');
            }

            onResize();

            $(window).resize(onResize);
          }
        };
      });
})();
