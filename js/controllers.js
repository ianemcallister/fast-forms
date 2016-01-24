//Controllers

retailerCheckoutApp.controller('landingPageController', ['$scope', function ($scope) {
	//decalare page
	console.log("landing Page");
	//single page that everythign else is launched off of
	

}]);

retailerCheckoutApp.controller('progressBarController', ['$scope', function ($scope) {

	//update the user on their progress

}]);

retailerCheckoutApp.controller('orderConfirmationController', ['$scope', function ($scope) {
	//decalare page
	console.log("order Conf Page");

	//local variables
	$scope.selectedProduct = ['Game Console 2015', 'Platformer Bros 3D'];
	$scope.quantity = [1, 1];
	$scope.price = [500, 50];

	

}]);

retailerCheckoutApp.controller('userInfoController',  ['$scope', function ($scope) {
	//decalare page
	console.log("user info Page");
	//autofile user info
	
}]);

retailerCheckoutApp.controller('addressesController', ['$scope', function ($scope) {
	//decalare page
	console.log("address Page");
	//geolocation to fill address info
	//same billing checkbox
	

}]);

retailerCheckoutApp.controller('paymentController', ['$scope', function ($scope) {
	//decalare page
	console.log("payment Page");
	//collect cc information
	

}]);