'use strict';

/**
 * @ngdoc function
 * @name lastFmApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the lastFmApp
 */
angular.module('lastFmApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
