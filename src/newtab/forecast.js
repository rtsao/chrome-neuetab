module.exports = function (weatherService, $animate) {
	
  return {
    restrict: 'EC',
    link: link,
    templateUrl: 'templates/weather.html'
  }

  function link(scope, element, attrs) {
    
    element.addClass('ng-hide');
    
    // $watchGroup in ng 1.3
    scope.$watch('[app.location,app.units]', function (value) {
      element.addClass('ng-hide');
      weatherService.getWeather(scope.app.location,scope.app.units).then(updateWeather);
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

};