var angular = require('angular');

module.exports = angular.module('app.AppCtrl', [])
  .controller('AppCtrl',['stockService', 'weatherService', 'storageService', function(stockService, weatherService, storageService) {
  
    var that=this;

    storageService.getItem('location');

    this.location = storageService.getItem('location') || 'santa clara,ca';
    this.units = 'imperial';
    this.coord = {lon:-121.96, lat:37.36}

    this.tickerList = storageService.getItem('tickerList') || [];

    if (this.tickerList.length) {
      this.stocks = storageService.getItem('stocks') || stockService.getStocks(this.tickerList).then(function(response){that.stocks=response.data;saveStocks();});
    }
    
    function saveStocks() {
      storageService.setItem('stocks', that.stocks, 1000000);
    }

    function saveTickers() {
      storageService.setItem('tickerList', that.tickerList);
    }

    this.addStock = function(stock) {
      that.stocks.push(stock);
      saveStocks();
      that.tickerList.push(stock.e+':'+stock.t);
      saveTickers();
    }

    this.removeStockByIndex = function(index) {
      that.stocks.splice(index, 1);
      that.tickerList.splice(index, 1);
      saveStocks();
      savetickers();

    }

    this.setWeatherLocation = function(location) {

    }

  }])