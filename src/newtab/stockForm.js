module.exports = function ($animate, stockService) {

  return {
    restrict: 'EC',
    link: link,
    require: '^?form',
    templateUrl: 'templates/stockForm.html'
  }

  function link(scope, element, attrs, ctrl) {

    scope.actionMessage = 'GO';
    scope.loading = false;

    ctrl.$setValidity('stock', false);
    ctrl.$setValidity('tickerInput', false);


    scope.checkStock = function () {
      if (!scope.stockToAdd) {
        console.log(scope.tickerInput)
        scope.loading = true;
        stockService.checkStock(scope.tickerInput).then(handleStock);
        scope.actionMessage = 'ADD';
        ctrl.$setValidity('tickerInput', true);
      }
      else {
        scope.app.addStock(scope.stockToAdd);
        delete scope.tickerInput;
        clearState();
      }

    }

    scope.changed = function () {
      clearState();
    }

    function clearState() {
      delete scope.stockToAdd;
      scope.actionMessage = 'GO';
      ctrl.$setValidity('stock', false);
    }

    function handleStock(response) {
      stock = response.data[0];
      scope.loading = false;
      console.log(stock);
      scope.stockToAdd = stock;
      scope.tickerInput = stock.e + ':' + stock.t;
    }

  }
};