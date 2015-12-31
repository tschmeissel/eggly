(function() {
	'use strict';
	
	angular
		.module('egglyApp')
		.controller('MainCtrl', MainCtrl);

	MainCtrl.$inject = ['$log', '$state'];
		
	function MainCtrl($log, $state) {
		var vm = this; // vm = view model
		
		vm.categories = [
			{"id": 0, name: "Development"},
			{"id": 1, name: "Design"},
			{"id": 2, name: "Exercise"},
			{"id": 3, name: "Humor"}
		];

		vm.bookmarks = [
			{"id": 0, "title": "AngularJS", "url": "http://angularjs.org", "category": "Development"},
			{"id": 1, "title": "Egghead.io", "url": "http://egghead.io", "category": "Development"},
			{"id": 2, "title": "A List Apart", "url": "http://alistapart.com", "category": "Design"},
			{"id": 3, "title": "One Page Love", "url": "http://onepagelove.com", "category": "Design"},
			{"id": 4, "title": "A List Apart", "url": "http://mobilitywod.com", "category": "Exercise"},
			{"id": 5, "title": "Robb Wolf", "url": "http://robbwolf.com", "category": "Exercise"},
			{"id": 6, "title": "Senor Gif", "url": "http://memebase.cheezburger.com/senorgif", "category": "Humor"},
			{"id": 7, "title": "Wimp", "url": "http://wimp.com", "category": "Humor"},
			{"id": 7, "title": "Dump", "url": "http://dump.com", "category": "Humor"}
		];
		
		vm.currentCategory = null;
		
		function setCurrentCategory(category) {
			$log.debug('set category: ' + category.name);
			vm.currentCategory = category;
			
//			$state.go('eggly.categories.bookmarks', {
//				category:category.name
//			})
		}
		
		vm.setCurrentCategory = setCurrentCategory;
	}
})();