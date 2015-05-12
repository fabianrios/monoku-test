'use strict';

/**
 * @ngdoc function
 * @name lastFmApp.controller:ArtistaCtrl
 * @description
 * # ArtistaCtrl
 * Controller of the lastFmApp
 */

var BASE_URL = "http://ws.audioscrobbler.com/2.0/?api_key=6c99bbdb7918ba66256380a94e702da3&format=json";

angular.module('lastFmApp')
  .factory('artistGet', function($resource){
    return $resource(BASE_URL + '&method=artist.getinfo&mbid=:mbid', {}, {
          query: {method:'GET', isArray:false}
    });
  })
  .controller('ArtistaCtrl', function ($scope, $routeParams, artistGet) {
    
    
    var res = artistGet.query({mbid: $routeParams.id}, function () {
      $scope.artist = res.artist;
      console.log($scope.artist);
      // $scope.artists = res.results.artistmatches.artist;
    });
    
  });
