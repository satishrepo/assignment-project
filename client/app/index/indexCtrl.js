var index = angular.module('index',['ngMessages','ui.router']);

index.config(function($stateProvider, $urlRouterProvider)
{
	$stateProvider.state('index',
	{
		url : '/',
		templateUrl :'/app/index/index.tpl',
		controller : 'indexCtrl'
	})
	.state('login',
	{
		url : '/login',
		templateUrl :'/app/index/login.tpl',
		controller : 'loginCtrl'
	})
	.state('signin',
	{
		url : '/signin',
		templateUrl :'/app/index/register.tpl',
		controller : 'registerCtrl'
	});

	$urlRouterProvider.otherwise('/');
})
.controller('indexCtrl', function($scope, indexService)
{

	$scope.message = 'Welcome to Writing';

})
.controller('loginCtrl', function($scope, $state,toastr, localStorageService, indexService)
{

	$scope.message = 'Welcome to Login';

	$scope.user = {
		username:'',
		password:''
	};

	$scope.loginUser = function(form)
	{
		if(form.$valid)
		{						
			
			indexService.post('login', $scope.user).then(function(response)
			{ 
				if(response.statusCode === 200)
				{
					localStorageService.set("userData", JSON.stringify(response.data));

					if(response.data.user.type == 'writer')
					{
						$state.go('user.writer');
					}
					else
					{
					
						$state.go('user.guest');	
					}
					return;
				}
				else
				{
					toastr.error(response.data);
				}
			}).catch(function(err)
			{
				toastr.error(err);
			});

		}

	};


})
.controller('registerCtrl', function($scope,toastr, $state, indexService, localStorageService)
{

	$scope.message = 'Welcome to Signup';

	$scope.user = {
		username:'',
		password:'',
		type:''
	};

	$scope.registerMe = function(form)
	{
		if(form.$valid)
		{						
			
			indexService.post('register', $scope.user).then(function(response)
			{ 
				if(response.statusCode === 200)
				{
					toastr.success('Registed Successfully, please login now.')
					$state.go('login');
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