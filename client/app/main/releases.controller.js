'use strict';

angular.module('discogsscrobblerApp')
  .controller('ReleaseCtrl', function ($scope, $http, $location, $routeParams) {
      $scope.release = [];

      $http.get('/api/discogs/release/' + $routeParams.releaseid).success(function(release) {
        console.log(release);
        $scope.release = release;
      });
  });
