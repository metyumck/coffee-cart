'use strict';

/**
 * @ngdoc function
 * @name coffeeCartApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the coffeeCartApp
 */
angular.module('coffeeCartApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
