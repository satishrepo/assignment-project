var app = angular.module('app', ['LocalStorageModule','toastr', 'constants', 'user','index']);

app.config(function($stateProvider, $urlRouterProvider, $httpProvider, $locationProvider, toastrConfig)
{
	$httpProvider.defaults.headers.post['Content-Type'] = 'application/json';

	if (!$httpProvider.defaults.headers.get) {
        $httpProvider.defaults.headers.common = {};
    }

	// $httpProvider.defaults.headers.common['Content-Type'] = 'application/json'; // not working 
    $httpProvider.defaults.headers.common["Cache-Control"] = "no-cache";
    $httpProvider.defaults.headers.common.Pragma = "no-cache";
    $httpProvider.defaults.headers.common["If-Modified-Since"] = "0";


     angular.extend(toastrConfig, {
	    allowHtml: false,
	    closeButton: true,
	    closeHtml: '<button>&times;</button>',
	    extendedTimeOut: 1000,
	    iconClasses: {
	      error: 'toast-error',
	      info: 'toast-info',
	      success: 'toast-success',
	      warning: 'toast-warning'
	    },  
	    messageClass: 'toast-message',
	    onHidden: null,
	    onShown: null,
	    onTap: null,
	    // positionClass: 'toast-top-full-width',
	    progressBar: true,
	    tapToDismiss: true,
	    timeOut: 3000,
	    titleClass: 'toast-title',
	    toastClass: 'toast'
	  });



});