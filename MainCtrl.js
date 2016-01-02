(function() {
	'use strict';
	
	angular
		.module('egglyApp')
		.controller('MainCtrl', MainCtrl);

	MainCtrl.$inject = ['$log', '$state'];
		
	function MainCtrl($log, $state) {
		// demonstration of $state service usage		
		//		var vm = this; // vm = view model
		//		
		//		vm.currentCategory = null;
		//		
		//		function setCurrentCategory(category) {
		//			$log.debug('set category: ' + category.name);
		//			vm.currentCategory = category;
		//			
		//			$state.go('eggly.categories.bookmarks', {
		//				category:category.name
		//			})
		//		}
		//		
		//		vm.setCurrentCategory = setCurrentCategory;
	}
})();