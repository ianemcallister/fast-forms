//Routes
retailerCheckoutApp.config(function ($routeProvider) {

	$routeProvider

	.when('/', {
        templateUrl: 'src/pages/landingPage.htm',
        controller: 'landingPageController'
    })

	.when('/orderConfirmation', {
		templateUrl: 'src/pages/orderConfirmation.htm',
		controller: 'orderConfirmationController'
	})

	.when('/userInfo', {
		templateUrl: 'src/pages/userInfo.htm',
		controller: 'userInfoController'
	})

	.when('/addresses', {
		templateUrl: 'src/pages/addresses.htm',
		controller: 'addressesController'
	})

	.when('/payment', {
		templateUrl: 'src/pages/payment.htm',
		controller: 'paymentController'
	})
	
});