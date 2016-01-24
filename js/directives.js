//Directives
retailerCheckoutApp.directives("retailerCheckoutApp", function() {
	return {
		restrict: 'E',
		templateUrl: 'directives/shoppingCart.htm',
		replace: true,
		scope: {
			itemName: "=",
			itemQuantity: "=",
			itemPrice: "=",
			itemTotal: "=",
			grossTotal: "="
		}
	}
})