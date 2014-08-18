"use strict";angular.module("coffeeCartApp",["ngAnimate","ngCookies","ngResource","ngRoute","ngSanitize","ngTouch","ui.bootstrap","firebaseCRUD"]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/enquiry.html",controller:"EnquiryCtrl"}).when("/about",{templateUrl:"views/about.html",controller:"AboutCtrl"}).otherwise({redirectTo:"/"})}]),angular.module("coffeeCartApp").controller("EnquiryCtrl",["$scope",function(a){a.yourDetails={},a.whatYouNeed={},a.coffeeAndQuantity=[],a.isLastTab=!1,a.enquiryTabs=[{heading:"Your Details",content:"/views/yourDetailsForm.html",active:!0},{heading:"What You Need",content:"/views/whatYouNeedForm.html",disabled:!0},{heading:"Confirmation",content:"/views/confirmEnquiry.html",disabled:!0}],a.submitData=function(){},a.addCoffee=function(b,c){console.log(b),a.coffeeAndQuantity.push({name:b,qnty:c})},a.removeCoffee=function(b){a.coffeeAndQuantity.splice(b,1)},a.nextTab=function(){a.enquiryTabs[0].active===!0?(a.enquiryTabs[1].active=!0,a.enquiryTabs[1].disabled=!1):(a.validateWhatYouNeed=!0,a.enquiryTabs[2].active=!0,a.enquiryTabs[2].disabled=!1,a.isLastTab=!0)},a.$watch("whatYouNeed.buyBeansBool",function(b){b||(a.coffeeAndQuantity=[])})}]),angular.module("coffeeCartApp").controller("AboutCtrl",["$scope",function(a){a.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}]),angular.module("coffeeCartApp").service("firebaseCRUD",function(){});