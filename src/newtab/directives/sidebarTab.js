var angular = require('angular');

module.exports = angular.module('app.sidebarTab', [])
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
        scope.$watch('selected', function(selectedVal){
          selectedVal?
            element.removeClass('ng-hide') : element.addClass('ng-hide');
        })
      }
    }

  })