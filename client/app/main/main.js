'use strict';

angular.module('discogsscrobblerApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'app/main/main.html',
        controller: 'MainCtrl'
      })
      .when('/genre', {
        templateUrl: 'app/main/genre.html',
        controller: 'GenreCtrl'
     })
      .when('/random' ,{
        templateUrl: 'app/main/random.html',
        controller: 'RandomCtrl'
     })
      .when('/album/:albumid', {
	templateUrl: 'app/main/album.html',
	controller: 'AlbumCtrl'     
      });
  });
