module.exports = function (weatherService) {
	return function(scope, element, attrs) {

    scope.loaded=false;

		function updateWeather(promise){
      console.log(promise);
      scope.currentTemp = promise.data.main.temp.toPrecision(2);
      scope.loTemp = promise.data.main.temp_min.toPrecision(2);
      scope.hiTemp = promise.data.main.temp_max.toPrecision(2);
      scope.description = promise.data.weather[0].description;
      scope.loaded=true;
		}

		weatherService.getWeather('milpitas,ca','imperial').then(updateWeather);

	}
};