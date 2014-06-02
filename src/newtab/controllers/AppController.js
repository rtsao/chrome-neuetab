var angular = require('angular');

module.exports = angular.module('app.AppCtrl', [])
  .controller('AppCtrl',['stockService', 'weatherService', function(stockService, weatherService) {
  
    var that=this;

    this.location = 'santa clara,ca';
    this.units = 'imperial';
    this.coord = {lon:-121.96,lat:37.36}

    stockService.getStocks().then(function(response){that.stocks=response.data;});
    
    this.addStock = function(stock) {
      that.stocks.push(stock);
    }

    this.removeStockByIndex = function(index) {
      that.stocks.splice(index,1);
    }

    this.setWeatherLocation = function(location) {

    }

  }])