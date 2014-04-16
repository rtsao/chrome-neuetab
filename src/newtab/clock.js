module.exports = function ($interval, $timeout, dateFilter) {
  return function(scope, element, attrs) {
    function updateTime() {
      element.text(dateFilter(new Date(), 'EEEE, MMMM d h:mm a'));
    }

    updateTime();

    function startClock() {
    	updateTime();
    	$interval(updateTime, 60000);
    }

    $timeout(startClock,60000-Date.now()%60000);

  }
};