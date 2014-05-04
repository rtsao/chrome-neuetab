module.exports = function ($animate) {
  
  return {
    restrict: 'EC',
    link: link,
    scope: {},
    templateUrl: 'templates/sidebar.html'
  }

  function link(scope, element, attrs) {    
    
    scope.toggleOpen = function() {
      attrs.$set('open', !attrs.open);
    }
    
  }

};