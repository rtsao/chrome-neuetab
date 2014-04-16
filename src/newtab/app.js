var angular = require('angular');

var app = angular.module('app', [])
	.directive('clock', require('./clock.js'));