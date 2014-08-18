'use strict';

/**
 * @ngdoc function
 * @name coffeeCartApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the coffeeCartApp
 */
angular.module('coffeeCartApp')
  .controller('EnquiryCtrl', function ($scope) {

    $scope.submitData = function () {


    };

    $scope.yourDetails = {};
    $scope.whatYouNeed = {};
    $scope.coffeeAndQuantity = [];
    $scope.isLastTab = false;
    
    $scope.addCoffee = function (coffeeType, coffeeQnty) {
      console.log(coffeeType);
      $scope.coffeeAndQuantity.push({name: coffeeType, qnty: coffeeQnty});

    };

    $scope.removeCoffee = function (index) {
      $scope.coffeeAndQuantity.splice(index, 1);

    };

    $scope.$watch('whatYouNeed.buyBeansBool', function (data) {
      if (!data) {
        $scope.coffeeAndQuantity = [];
    }

    });


    $scope.enquiryTabs = [{
      heading: 'Your Details',
      content: '/views/yourDetailsForm.html',
      active: true
    },{
      heading: 'What You Need',
      content: '/views/whatYouNeedForm.html',
      disabled: true

    },{
      heading: 'Confirmation',
      content: '/views/confirmEnquiry.html',
      disabled: true
    }];

    $scope.nextTab = function () {

      if ($scope.enquiryTabs[0].active === true) {
        $scope.enquiryTabs[1].active = true;
        $scope.enquiryTabs[1].disabled = false;
      } else {
        $scope.validateWhatYouNeed = true;
        $scope.enquiryTabs[2].active = true;
        $scope.enquiryTabs[2].disabled = false;
        $scope.isLastTab = true;
      }
    };

});
