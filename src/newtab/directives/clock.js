var angular = require('angular');

module.exports = angular.module('app.clock', [])
  .directive('clock', ['$interval', '$timeout', 'dateFilter', '$animate', function ($interval, $timeout, dateFilter, $animate) {
    return {
      restrict: 'EC',
      link: link,
      scope: {},
      templateUrl: 'templates/clock.html'
    }

    function link(scope, element, attrs) {

      element.addClass('ng-hide');
      function updateTime() {
        $animate.removeClass(element, 'ng-hide');
        var now = new Date();
        scope.date = dateFilter(now, 'EEEE, MMMM d');
        scope.year = now.getFullYear();
        scope.time = dateFilter(now, 'h:mm');
        scope.ampm = dateFilter(now, 'a');
      }

      function startClock() {
        updateTime();
        $interval(updateTime, 60000);
      }

      updateTime();
      $timeout(startClock,60100-Date.now()%60000);

    }
  }])