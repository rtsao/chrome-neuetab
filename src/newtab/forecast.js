module.exports = function (weatherService, $animate) {
	
  return {
    restrict: 'EC',
    link: link,
    scope: {},
    templateUrl: 'templates/weather.html'
  }

  function link(scope, element, attrs) {
    
    element.addClass('ng-hide');
    weatherService.getWeather('santa+clara,ca','imperial').then(updateWeather);
    
    function updateWeather(promise) {
      var data = promise.data;
      scope.currentTemp = data.main.temp.toPrecision(2);
      scope.loTemp = data.main.temp_min.toPrecision(2);
      scope.hiTemp = data.main.temp_max.toPrecision(2);
      scope.description = data.weather[0].description;
      
      $animate.removeClass(element, 'ng-hide');

      return promise;

    }
    
  }

};