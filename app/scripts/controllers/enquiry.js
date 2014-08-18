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

    $scope.coffeeAndQuantity = [];

    $scope.isLastTab = false;

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
