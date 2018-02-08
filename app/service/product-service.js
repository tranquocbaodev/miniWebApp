angular.module("app.core")
.factory('ProductService', ['dataSvc','$q', function (dataSvc,$q) {
	var service = {};

	//get service company
	service.getServiceCompany = function () {
		var deferred = $q.defer();
		dataSvc.query("data-service-company").then(function (data) {
			deferred.resolve(data);
		});
		return deferred.promise;
	};

	//get our discovery
	service.getOurDiscovery = function () {
		var deferred = $q.defer();
		dataSvc.query("our-discovery").then(function (data) {
			deferred.resolve(data);
		});
		return deferred.promise;
	};

	//get slider top
	service.getSliderProject = function () {
		var deferred = $q.defer();
		dataSvc.query("data-slider-project").then(function (data) {
			deferred.resolve(data);
		});
		return deferred.promise;
	};

	//get list customer
	service.getListCustomer = function () {
		var deferred = $q.defer();
		dataSvc.query("data-list-customer").then(function (data) {
			deferred.resolve(data);
		});
		return deferred.promise;
	};
	return service;
}]);