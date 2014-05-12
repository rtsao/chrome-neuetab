module.exports = function(stockService) {
  
  var that=this;

  stockService.getStocks().then(function(response){that.stocks=response.data;});

  this.addStock = function(stock) {
    that.stocks.push(stock);
  }

  this.removeStockByIndex = function(index) {
    that.stocks.splice(index,1);
  }

};