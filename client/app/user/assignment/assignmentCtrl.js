var assignment = angular.module('user.assignment',['ui.router']);

assignment.config(function($stateProvider, $urlRouterProvider)
{
	
	$stateProvider.state('user.new-assignment',
	{
		url : '/new-assignment/:id',
		templateUrl :'/app/user/assignment/write.tpl',
		controller : 'assignmentCtrl'
	})
	.state('user.request-assignemnt',
	{
		url : '/request-assignment',
		templateUrl :'/app/user/assignment/request-assignment.tpl',
		controller : 'requestCtrl'	
	})
	.state('user.view-assignments',
	{
		url : '/view-assignments',
		templateUrl :'/app/user/assignment/view-assignments.tpl',
		controller : 'viewAssignmentCtrl'	
	})
	.state('user.browse-assignments',
	{
		url : '/browse-assignments',
		templateUrl :'/app/user/assignment/browse-assignments.tpl',
		controller : 'browseAssignmentCtrl'	
	})

})
.controller('assignmentCtrl', function($scope, $state, $stateParams, toastr, localStorageService, assignmentService)
{
	$scope.title = 'Welcome to New Assignment';

	$scope.userData = localStorageService.get('userData');

	$scope.assignment = {
		title: '',
		content: '',
		completed : false
	}

	$scope.saveAssignment = function(form)
	{
		if(form.$valid)
		{
			$scope.assignment.assignment_id = $stateParams.id;
			$scope.assignment.attended_by = $scope.userData.user._id;
			$scope.assignment.token =  $scope.userData.token;			

			$scope.assignment.submitted = true;

			assignmentService.post('saveassignment', $scope.assignment).then(function(response)
			{ 
				if(response.statusCode === 200)
				{
					toastr.success('Assignment Updated Successfully');

					$scope.assignment = {};
					
					$scope.assignment.submitted = false;

					setTimeout(function()
					{
						$state.go('user.browse-assignments');
					},1000);

					return;
				}
				else
				{
					toastr.error(response.data);
				}
			}).catch(function(err)
			{
				console.log(err);
			});
		}
	};

	
	
})
.controller('requestCtrl', function($scope, toastr, localStorageService, assignmentService)
{
	$scope.title = 'Request Assignment';

	$scope.userData = localStorageService.get('userData');

	$scope.request = {
		request_by: '',
		token: '',
		title: '',
		description: '',
		duration: ''
	}

	$scope.request.submitted = false;

	$scope.submitRequest = function(form)
	{
		
		if(form.$valid)
		{
			$scope.request.request_by = $scope.userData.user._id;
			$scope.request.token =  $scope.userData.token;

			$scope.request.submitted = true;

			assignmentService.post('saveassignment', $scope.request).then(function(response)
			{ 
				if(response.statusCode === 200)
				{
					toastr.success('Request submitted successfully. We will get back to you soon.');

					$scope.request = {};
					
					$scope.request.submitted = false;
					return;
				}
				else
				{
					toastr.error(response.data);
				}
			}).catch(function(err)
			{
				console.log(err);
			});
		}
	};

	
})
.controller('viewAssignmentCtrl', function($scope, Constants, toastr, localStorageService, assignmentService)
{
	$scope.title = 'View Assignment';

	$scope.userData = localStorageService.get('userData');

	$scope.downloadUrl = Constants.APP_URL+'assignment/download';

	var getAssignments = function()
	{
		
		var postData = {
			user_id : $scope.userData.user._id,
		 	token :  $scope.userData.token
		 };

		assignmentService.post('getAssignments', postData).then(function(response)
		{ 
			if(response.statusCode === 200)
			{
				$scope.assignments = response.data;
			
			}
			else
			{
				toastr.error(response.data);
			}
		}).catch(function(err)
		{
			console.log(err);
		});
	
	};

	/*$scope.downloadPdf = function(id)
	{
		var postData = {
			assignment_id : id,
		 	token :  $scope.userData.token
	 	};

        assignmentService.downloadPdf('download', postData).then(function(response)
        {
        	window.open(response);
        	toastr.success('Downloaded Successfully.');

        }).catch(function(err)
		{
			console.log(err);
		});
    };*/


	var init = function()
	{
		getAssignments();
	}

	init();

})

.controller('browseAssignmentCtrl', function($scope, toastr, localStorageService, assignmentService)
{
	$scope.title = 'View Assignment';

	$scope.userData = localStorageService.get('userData');

	var getAllAssignments = function()
	{
		
		var postData = {
			user_id : $scope.userData.user._id,
		 	token :  $scope.userData.token
		 };

		assignmentService.post('getAllAssignments', postData).then(function(response)
		{ 
			if(response.statusCode === 200)
			{
				$scope.assignments = response.data;			
			}
			else
			{
				toastr.error(response.data);
			}
		}).catch(function(err)
		{
			console.log(err);
		});
	
	};

	var init = function()
	{
		getAllAssignments();
	}

	init();

})
;