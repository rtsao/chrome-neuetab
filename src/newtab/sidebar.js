module.exports = function ($animate,stockService) {
  
  return {
    restrict: 'EC',
    link: link,
    templateUrl: 'templates/sidebar.html'
  }

  function link(scope, element, attrs) {

    scope.toggleOpen = function() {
      attrs.$set('open', !attrs.open);
    }

    scope.removeStock = function(index) {
      scope.app.removeStockByIndex(index);
    }

  }

};