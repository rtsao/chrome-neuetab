var angular = require('angular');

module.exports = angular.module('app.stocks', [])
  .directive('stocks', ['stockService', '$animate', function (stockService, $animate) {
  
    return {
      restrict: 'E',
      templateUrl: 'templates/stocks.html'
    }

  }])