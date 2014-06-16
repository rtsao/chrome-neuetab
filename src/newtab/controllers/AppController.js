var angular = require('angular');

module.exports = angular.module('app.AppCtrl', [])
  .controller('AppCtrl',['stockService', 'weatherService', 'storageService', function(stockService, weatherService, storageService) {
  
    var that=this;

    storageService.getItem('location');

    this.location = storageService.getItem('location')|| 'santa clara,ca';
    this.units = 'imperial';
    this.coord = {lon:-121.96,lat:37.36}
    this.stocks = [];

    this.tickerList = storageService.getItem('tickerList') || [];

    if (this.tickerList.length) {
      this.stocks = storageService.getItem('stocks') || stockService.getStocks(this.tickerList).then(function(response){that.stocks=response.data;});
    }
    
    this.addStock = function(stock) {
      that.stocks.push(stock);
      storageService.setItem('stocks', that.stocks);
      that.tickerList.push(stock.e+':'+stock.t);
      storageService.setItem('tickerList', that.tickerList);
    }

    this.removeStockByIndex = function(index) {
      that.stocks.splice(index,1);
      that.tickerList.splice(index,1);
      storageService.setItem('stocks', that.stocks);
      storageService.setItem('tickerList', that.tickerList);

    }

    this.setWeatherLocation = function(location) {

    }

  }])