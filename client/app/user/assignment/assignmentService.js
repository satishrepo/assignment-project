var assignmenttService = angular.module('user.assignment');
assignmenttService.factory('assignmentService', function($http, $q, Constants, localStorageService)
{
	var url = Constants.APP_URL+'assignment/';

	return {


		post(endpoint, dataObj)
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

		/*downloadPdf(endpoint, dataObj)
		{
			// $scope.loading = true;
	        var q = $q.defer();
	        // $http.defaults.headers.common['content-type']= 'application/pdf';
	        $http.post(url+endpoint, dataObj).success(function (response) 
            {
                // console.log(response);
                var file = new Blob([response], {type: 'application/pdf'});
                var fileURL = URL.createObjectURL(file);
                // $scope.loading = false;
                q.resolve(fileURL);
            })
            .error(function(err){
                // $scope.loading = false;
                q.reject(err);
            });
	        return q.promise;
		},*/
		
	}
})