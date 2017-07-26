var user = angular.module('user',['ui.router','toastr','user.assignment']);

user.config(function($stateProvider, $urlRouterProvider)
{
	
	$stateProvider.state('user',
	{
		url : '/user',
		templateUrl :'/app/user/user.tpl',		
		controller : 'userLoadCtrl'		
	})
	.state('user.guest',
	{
		url : '/guest/dashboard',
		templateUrl :'/app/user/user-dash.tpl',
		controller : 'userCtrl'
	})
	.state('user.writer',
	{
		url : '/writer/dashboard',
		templateUrl : '/app/user/writer-dash.tpl',
		controller : 'writerCtrl'
	})
})
.controller('userLoadCtrl', function($scope, localStorageService)
{
	$scope.userData = localStorageService.get('userData');

	$scope.user = $scope.userData.user;
	$scope.token = $scope.userData.token;
	
})
.controller('userCtrl', function($scope, localStorageService, userService)
{
	$scope.title = 'Welcome to Dashboard';
	// $scope.user = localStorageService.get('user');

	// console.log($scope.user);

	
})
.controller('writerCtrl',function($scope, $stateParams,$state, localStorageService,  userService)
{
	$scope.userData = localStorageService.get('userData');


	console.log($scope.userData.user);

	/*var init = function()
	{
		getUserDetail();
	};


	var getUser = function()
	{
		
	};*/

	// init();
	
});