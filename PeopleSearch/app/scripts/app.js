'use strict';

/**
 * @ngdoc overview
 * @name flickrSearchApp
 * @description
 * # flickrSearchApp
 *
 * Main module of the application.
 */
angular
  .module('flickrSearchApp', [
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
        controller: 'FlickrSearchController',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })

      .otherwise({
        redirectTo: '/'
      });
  });
