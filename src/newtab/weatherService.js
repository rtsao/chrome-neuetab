module.exports = function ($http) {
  return {
    getWeather: function(query, units){
      return $http.get('http://api.openweathermap.org/data/2.5/weather?q='+query+'&units=+'+units);
    }
  }
};