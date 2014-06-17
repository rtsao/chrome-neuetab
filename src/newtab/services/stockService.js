var angular = require('angular');

module.exports = angular.module('app.stockService', [])
  .service('stockService', ['$http', 'storageService', function ($http, storageService) {

    function stockQuery(query) {

      var options = {
        transformResponse: function (data, headersGetter) {
          return JSON.parse(data.substring(3));
        }
      }

      return $http.get('http://www.google.com/finance/info?infotype=infoquoteall&q='+query, options);
    }

    return {

      getStocks: function(tickerList) {
        if (tickerList.length) {
          return stockQuery(tickerList.join(','));
        }
      },
      checkStock: function(ticker) {
        return stockQuery(ticker);
      }

    }

  }])