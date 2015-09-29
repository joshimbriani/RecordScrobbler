'use strict';

angular.module('discogsscrobblerApp')
  .controller('GenreCtrl', function ($scope, $http) {
    $scope.genres = [];

    $http.get('/api/discogs/collection/genre').success(function(genres) {
      $scope.genres = genres.genres;
      console.log($scope.genres);
    });

  });
