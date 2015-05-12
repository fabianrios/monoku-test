'use strict';
$(document).foundation();
/**
 * @ngdoc overview
 * @name lastFmApp
 * @description
 * # lastFmApp
 *
 * Main module of the application.
 */
angular
  .module('lastFmApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider, $stateProvider) {
    $stateProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
