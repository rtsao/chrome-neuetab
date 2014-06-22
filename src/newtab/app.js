var angular = require('angular')
  , ngAnimate = require('angular-animate')
  , moment = require('moment')
  , clock = require('./directives/clock.js')
  , weather = require('./directives/weather.js')
  , sidebar = require('./directives/sidebar.js')
  , stocks = require('./directives/stocks.js')
  , AppCtrl = require('./controllers/AppController.js')
  , weatherService = require('./services/weatherService.js')
  , stockService = require('./services/stockService.js')
  , stockForm = require('./directives/stockForm.js')
  , storageService = require('./services/storageService.js')

var app = angular.module('app',
  [
    'ngAnimate',
    clock.name,
    weather.name,
    sidebar.name,
    stocks.name,
    AppCtrl.name,
    weatherService.name,
    stockService.name,
    stockForm.name,
    storageService.name
  ]
)
.run(function ($rootScope) {
    $rootScope.moment = moment;
 });