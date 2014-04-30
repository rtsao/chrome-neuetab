module.exports = function (weatherService) {
	return function(scope, element, attrs) {

    scope.loaded=false;

    if (localStorage.weather) {

      var promise = updateWeather(JSON.parse(localStorage.weather));

      if (Date.now()/1000-promise.data.dt < 600) {
        return;
      }

    }

    weatherService.getWeather('milpitas,ca','imperial').then(updateWeather).then(saveWeather);
    
		function updateWeather(promise) {

      var data = promise.data;

      scope.currentTemp = data.main.temp.toPrecision(2);
      scope.loTemp = data.main.temp_min.toPrecision(2);
      scope.hiTemp = data.main.temp_max.toPrecision(2);
      scope.description = data.weather[0].description;
      scope.loaded=true;

      return promise;

    }

    function saveWeather(promise) {
      localStorage.weather = JSON.stringify(promise);
    }

	}
};