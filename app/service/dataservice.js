/* Services */
angular
		.module('app.core')
		.factory('dataSvc', dataSvc);

//dataSvc
function dataSvc($http, $q) {
		return {
				query: function(src) {
						var deferred = $q.defer();
						$http({
									method: 'GET',
									url: 'app/data/'+src + ".json"
							 }).then(function (success){
									deferred.resolve(success.data);
							 },function (error){
									deferred.reject(error);
							 });
						return deferred.promise;
				}
		};
};
