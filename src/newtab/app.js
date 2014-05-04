var angular = require('angular');
var $ngAnimate = require('angular-animate');

var app = angular.module('app', ['ngAnimate'])
  .directive('clock', require('./clock.js'))
  .service('weatherService', require('./weatherService.js'))
  .directive('forecast', ['weatherService','$animate', require('./forecast.js')])
  .service('stockService', require('./stockService.js'))
  .directive('stocks', ['stockService','$animate', require('./stocks.js')])
  .directive('sidebar', ['$animate', require('./sidebar.js')])