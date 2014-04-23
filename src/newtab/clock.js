module.exports = function ($interval, $timeout, dateFilter) {
  return function(scope, element, attrs) {

    function updateTime() {
      var now = new Date();
      scope.date = dateFilter(now, 'EEEE, MMMM d');
      scope.year = now.getFullYear();
      scope.time = dateFilter(now, 'h:mm');
      scope.ampm = dateFilter(now, 'a');
    }

    function startClock() {
    	updateTime();
    	$interval(updateTime, 60000);
    }

    updateTime();
    $timeout(startClock,60000-Date.now()%60000);

  }
};