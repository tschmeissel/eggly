(function() {
	'use strict';
	
	angular
		.module('egglyApp')
		.controller('MainCtrl', MainCtrl);

	MainCtrl.$inject = ['$log'];
		
	function MainCtrl($log) {
		var vm = this; // vm = view model
		
		vm.firstName = 'John';
		vm.lastName = 'Doe';
		vm.city = 'Nashville';
		
		vm.getAddress = getAddress;
		
		function getAddress() {
			return getFullName() + ', ' + vm.city;
		}
		
		function getFullName() {
			var fullUserName = vm.firstName + ' ' + vm.lastName;
			$log.debug("provide full user name: %s", fullUserName); 
			return fullUserName;
		};
	}
})();