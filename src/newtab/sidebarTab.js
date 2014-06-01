module.exports = function() {
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
  };
}