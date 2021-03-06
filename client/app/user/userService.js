var userService = angular.module('user');
userService.factory('userService', function($http, $q, localStorageService)
{
	var url = 'http://localhost:8080/user/';

	return {

		getLocalUser()
		{
			// return localStorageService.get('user');
			var def = $q.defer();
			localStorageService.get('user').success(function(res)
			{
				def.resolve(res);
			}).error(function(err)
			{
				def.reject(err);
			});
			return def.promise;	
		},

		postService(endpoint, dataObj)
		{

			var def = $q.defer();
			$http.post(url+endpoint, dataObj).success(function(res)
			{
				def.resolve(res);
			}).error(function(err)
			{
				def.reject(err);
			});
			return def.promise;
		},

		get(endpoint, dataObj)
		{

			var def = $q.defer();
			$http.get(url+endpoint, dataObj).success(function(res)
			{
				def.resolve(res);
			}).error(function(err)
			{
				def.reject(err);
			});
			return def.promise;
		},

		getService(endpoint, dataObj)
		{
			var def = $q.defer();
			$http({
				    url: url+endpoint,
				    // dataType: "json",
				    method: "GET",
				    params : dataObj,
				    headers: {
				        "Content-Type" : "application/json",
				        "accept" : "application/json",
				    }
			}).success(function(res)
			{
				def.resolve(res);
			}).error(function(err)
			{
				def.reject(err);
			});
			return def.promise;
		},
		
	}
})