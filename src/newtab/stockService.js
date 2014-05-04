module.exports = function ($http) {
  return {
    getStocks: function(stocksArray) {
      return $http.get(
      	'http://www.google.com/finance/info?infotype=infoquoteall&q='+stocksArray.join(','),
      	{
        	transformResponse: function (data, headers) {
            return JSON.parse(data.substring(3));
          }
        }
      )
    }
  }
};