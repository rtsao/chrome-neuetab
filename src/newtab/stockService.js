module.exports = function ($http) {

  var tickerList = ['goog','intc'];
  var stocks;

  function stockQuery(query) {

    var options = {
      transformResponse: function (data, headers) {
        return JSON.parse(data.substring(3));
      }
    }

    return $http.get('http://www.google.com/finance/info?infotype=infoquoteall&q='+query, options);
  }

  return {

    getStocks: function() {
      console.log('getstocks!');
      return stocks = stockQuery(tickerList.join(','));
    },
    stockData: function() {
      console.log('stockdata!');
      return stocks || this.getStocks();
    },
    listStocks: function() {
      return tickerList;
    },
    addStock: function(ticker) {
      tickerList.push(ticker);
      //localstorage save
    },
    checkStock: function(ticker) {
      return stockQuery(ticker);
    },
    removeStockIndex: function(index) {
      tickerList.splice(index,1);
      console.log(tickerList);
    },
    addStockList: function(stock) {
      tickerList.push(stock);
      console.log('pushed!');
    }

  }

};