'use strict';
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
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/artista/:id/view', {
        templateUrl: 'views/artista.html',
        controller: 'ArtistaCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
