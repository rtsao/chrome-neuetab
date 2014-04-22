module.exports = function (weatherService) {
	return function(scope, element, attrs) {

    scope.loaded=false;

		function updateWeather(promise){
			//element.html(JSON.stringify(promise.data));
      console.log(promise);
      scope.currentTemp = promise.data.main.temp;
      scope.loTemp = promise.data.main.temp_min;
      scope.hiTemp = promise.data.main.temp_max;
      scope.loaded=true;
		}

		weatherService.getWeather('santa+clara,ca','imperial').then(updateWeather);

	}
};