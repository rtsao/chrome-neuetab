var angular = require('angular');
var $ngAnimate = require('angular-animate');

var app = angular.module('app', ['ngAnimate'])
  .controller('AppCtrl', ['stockService', require('./appController.js')])
  .directive('clock', require('./clock.js'))
  .service('weatherService', require('./weatherService.js'))
  .directive('forecast', ['weatherService','$animate', require('./forecast.js')])
  .service('stockService', require('./stockService.js'))
  .directive('stocks', ['stockService','$animate', require('./stocks.js')])
  //.directive('stock', require('./stock.js'))
  .directive('sidebar', ['$animate','stockService', require('./sidebar.js')])
  .directive('stockForm', ['$animate','stockService', require('./stockForm.js')])