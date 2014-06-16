var angular = require('angular');

module.exports = angular.module('app.weather', [])
  .directive('weather', ['weatherService', 'storageService', '$animate', function (weatherService, storageService, $animate) {
  
    return {
      restrict: 'E',
      link: link,
      templateUrl: 'templates/weather.html'
    }

    function link(scope, element, attrs) {
      
      element.addClass('ng-hide');
      
      // $watchGroup in ng 1.3



      scope.$watch('app.location', function (val,oldVal) {
        console.log('asdfaksdfasdfsfsdfs',val,oldVal);
      });

      scope.$watch('[app.location,app.units]', function (value,oldValue) {
        element.addClass('ng-hide');
        
          console.log('asdfasdf',oldValue,value);
        
        weatherService.getWeather(scope.app.location,scope.app.units).then(updateWeather);
        console.log('watch mcgee!');
        storageService.setItem('location',scope.app.location);

      },true);
      
      function updateWeather(data) {
        scope.currentTemp = data.main.temp.toPrecision(2);
        scope.loTemp = data.main.temp_min.toPrecision(2);
        scope.hiTemp = data.main.temp_max.toPrecision(2);
        scope.description = data.weather[0].description;
        scope.app.coord = data.coord;
        
        $animate.removeClass(element, 'ng-hide');

        return data;

      }
      
    }

  }])