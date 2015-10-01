'use strict';

angular.module('discogsscrobblerApp')
  .controller('MainCtrl', function ($scope, $http, $location) {
    $scope.releases = [];

    $http.get('/api/discogs/collection?perpage=50').success(function(releases) {
      console.log(releases);
      $scope.releases = releases;
    });

    $scope.goToReleasePage = function(releaseid) {
	    $location.url('/release/' + releaseid);
    }

  });
