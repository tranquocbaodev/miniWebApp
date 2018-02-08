/* Controllers */
(function() {
  'use strict';
  angular
    .module('app.core')
    .controller('coreCtrl', coreCtrl);
  //core 
  function coreCtrl($scope,$timeout,$window,$rootScope,$location,$filter,ProductService) {
      var vmc = this;
      $scope.titlePage = "dashboard";


      //click show popup quotation
      $scope.clickShowPopupQuotation = function(event) {
      	angular.element(document.querySelectorAll(".contact-us")).removeClass('hide');
      }

      //click hide popup quotation
      $scope.clickHidePopupQuotation = function(event) {
      	angular.element(document.querySelectorAll(".contact-us")).addClass('hide');
      }
    }
})();
