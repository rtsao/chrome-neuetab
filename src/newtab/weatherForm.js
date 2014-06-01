module.exports = function ($animate, weatherService) {

  console.log('hiasdf');

  return {
    restrict: 'EC',
    link: link,
    scope: {},
    templateUrl: 'templates/weatherForm.html'
  }

  function link(scope, element, attrs, ctrl) {


    scope.action = 'edit';
    scope.showForm = false;

    scope.toggleForm = function () {
      if (scope.showForm) {
        scope.action = 'edit'
        //clear it out
      }
      else {
        scope.action = 'cancel'
      }

      scope.showForm = !scope.showForm;

    }
  
  }
};