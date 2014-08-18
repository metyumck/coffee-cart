'use strict';

/**
 * @ngdoc overview
 * @name coffeeCartApp
 * @description
 * # coffeeCartApp
 *
 * Main module of the application.
 */
angular
  .module('coffeeCartApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.bootstrap',
    'firebase'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/enquiry.html',
        controller: 'EnquiryCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
