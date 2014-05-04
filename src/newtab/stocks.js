module.exports = function (stockService, $animate) {
  
  return {
    restrict: 'EC',
    link: link,
    scope: {},
    templateUrl: 'templates/stocks.html'
  }

  function link(scope, element, attrs) {
    
    element.addClass('ng-hide');
    var hi = stockService.getStocks(['goog','aapl']).then(updateStocks);
    
    function updateStocks(response) {
      var data = response.data;
      
      console.log(data);
      scope.stocks = data;
      
      $animate.removeClass(element, 'ng-hide');

      return response;

    }
    
  }

};