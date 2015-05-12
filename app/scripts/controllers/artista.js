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
  .factory('artistSimilar', function($resource){
    return $resource(BASE_URL + '&method=artist.getsimilar&mbid=:mbid', {}, {
          query: {method:'GET', isArray:false}
    });
  })
  .controller('ArtistaCtrl', function ($scope, $routeParams, artistGet, artistSimilar) {
    
    
    var respuesta = artistGet.query({mbid: $routeParams.id}, function () {
      $scope.artist = respuesta.artist;
      console.log($scope.artist);
      // $scope.artists = res.results.artistmatches.artist;
    });
    
    var res = artistSimilar.query({mbid: $routeParams.id}, function () {
      $scope.artists = res.similarartists.artist;
      console.log($scope.artists);
      // $scope.artists = res.results.artistmatches.artist;
    });
    
  });
