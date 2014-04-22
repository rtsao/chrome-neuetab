module.exports = function (weatherService) {
	return function(scope, element, attrs) {

		function updateWeather(promise){
			element.html(JSON.stringify(promise.data));
		}

		weatherService.getWeather('santa+clara,ca','imperial').then(updateWeather);
	}
};

