'use strict';

/**
 * @ngdoc function
 * @name coffeeCartApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the coffeeCartApp
 */
angular.module('coffeeCartApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
