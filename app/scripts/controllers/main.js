'use strict';

/**
 * @ngdoc function
 * @name lastFmApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the lastFmApp
 */

var BASE_URL = "http://ws.audioscrobbler.com/2.0/?api_key=6c99bbdb7918ba66256380a94e702da3&format=json";

angular.module('lastFmApp')
  .factory('artistSearch', function($resource){
    return $resource(BASE_URL + '&method=artist.search&artist=:artist', {}, {
          query: {method:'GET', isArray:false}
    });
  })

  .controller('MainCtrl', function ($scope, artistSearch) {
    

    	$scope.$watch('searchField', function (newVal) {
        console.log(newVal);
        if (newVal){
          var res = artistSearch.query({artist: newVal}, function () {
            var artists = res.results.artistmatches.artist;
            console.log(artists);
            $scope.artists = res.results.artistmatches.artist;
          });
        } else {
          $scope.artists = []
        }
    	})

      $scope.go = function ( path ) {
        $location.path( "/artista/"+path+"/view" );
      };

  });
