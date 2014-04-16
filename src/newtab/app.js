
var clock = require('./clock.js');
var angular = require('angular');


var app = angular.module('app', [])
	.directive('clock', clock);
