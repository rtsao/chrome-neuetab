var angular = require('angular');

module.exports = angular.module('app.sidebar', [])
  
  .directive('sidebar', ['$animate', 'stockService', function ($animate, stockService) {

    return {
      restrict: 'EC',
      link: link,
      templateUrl: 'templates/sidebar.html',
      controller: function($scope) {
          var panes = $scope.panes = [];

          $scope.select = function(pane) {
            angular.forEach(panes, function(pane) {
              pane.selected = false;
            });
            pane.selected = true;
          };

          this.addPane = function(pane) {
            if (panes.length === 0) {
              $scope.select(pane);
            }
            panes.push(pane);
          };
        }
    }

    function link(scope, element, attrs) {

      scope.toggleOpen = function() {
        attrs.$set('open', !attrs.open);
      }

      scope.removeStock = function(index) {
        scope.app.removeStockByIndex(index);
      }

    }

  }])

  .directive('sidebarTab', function() {

    return {
      require: '^sidebar',
      restrict: 'C',
      scope: {
        title:'@'
      },
      link: function(scope, element, attrs, tabsCtrl) {
        element.addClass('ng-hide');
        tabsCtrl.addPane(scope);
        scope.$watch('selected', function(selectedVal) {
          selectedVal?
            element.removeClass('ng-hide') : element.addClass('ng-hide');
        })
      }
    }

  })