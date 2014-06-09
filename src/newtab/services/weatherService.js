var angular = require('angular');

module.exports = angular.module('app.weatherService', [])
  .service('weatherService', ['$http', '$q', function ($http, $q) {
    return {
      getWeather: function(query, units) {

        var deferred = $q.defer();

        var options = {
          method: 'GET',
          url:'http://api.openweathermap.org/data/2.5/weather',
          params:{q:query,units:units},
          transformResponse: function(data) {
            data = JSON.parse(data);
            data.query = query;
            data.units = units;
            data.time = Date.now();

            return data;
          }
        }

        try {
          var cachedWeather = JSON.parse(localStorage.weather);

          if (cachedWeather.query === query && cachedWeather.units === units && (Date.now() - cachedWeather.time) < 1000*50) {
            console.log('Using cached weather');
            deferred.resolve(cachedWeather);
            return deferred.promise;
          }

        } catch(e) {
          console.log(e);
        }

        console.log('Loading new weather');
        
        $http(options).success(function(data){
          //HTTP status codes not used in openweathermap API, instead in returned JSON
          if (data.cod !== 200) {
            deferred.reject(data.message);
          }
          else {
            deferred.resolve(data);
            localStorage.weather = JSON.stringify(data);

          }

        });

        return deferred.promise;

      }
    }
  }])