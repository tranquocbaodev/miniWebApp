/* Controllers */
(function() {
    'use strict';

    angular
        .module('app.dashboard')
        .controller('dashboardCtrl', dashboardCtrl);

    function dashboardCtrl($scope, $filter, $location,$timeout,ProductService) {
      var vm = this;
      console.log("dashboard");
      $scope.$parent.titlePage = "dashboard";
      vm.checkSlickProjectRun = false;
      vm.checkSlickCustomerRun = false;
      vm.slickConfigCustomer = {
        centerMode:true,
        centerPadding:0,
        method: {}
      }

      vm.dataCustomerComment = "";

      //click item slick customer
      vm.slickGoTo = function (index) {
        console.log(index);
        vm.slickConfigCustomer.method.slickGoTo(index);
        vm.dataCustomerComment = vm.arrayListCustomer[index].comment;
      }

      // Service company
      vm.arrayServiceCompany = [];
      ProductService.getServiceCompany().then(function (result) {
        vm.arrayServiceCompany = result;
      });

      // Our discovery
      vm.arrayOurDiscovery = [];
      ProductService.getOurDiscovery().then(function (result) {
      	vm.arrayOurDiscovery = result;
      });

      // Slider top
      vm.arraySliderTop = [];
      ProductService.getSliderProject().then(function (result) {
        vm.arraySliderTop = result;
        vm.checkSlickProjectRun = true;
      });

      // Data list customer
      vm.arrayListCustomer = [];
      ProductService.getListCustomer().then(function (result) {
      	vm.arrayListCustomer = result;
        vm.checkSlickCustomerRun = true;
        vm.dataCustomerComment = vm.arrayListCustomer[0].comment;
      });

      //Click view more
      $scope.clickViewMore = function(event) {
       if (angular.element(event.currentTarget).parent().find(".yellow-active").hasClass('hide')) {
          angular.element(event.currentTarget).parent().find(".yellow-active").removeClass('hide');
        }else{
          angular.element(event.currentTarget).parent().find(".yellow-active").addClass('hide');
        }
      }
    }
})();
