(function() {
	'use strict'
	
	var bookmarks = angular.module('categories.bookmarks', []);
	
	bookmarks.config(function($stateProvider) {
		
		$stateProvider
			.state('eggly.categories.bookmarks', {
				url: 'categories/:category',
				views: {
					'bookmarks@': {
						templateUrl: 'app/categories/bookmarks/bookmarks.tmpl.html',
						controller: 'BookmarksCtrl as bookmarks',
					}
				}
			})
			
		console.log('bookmarks module config called');
	})
	
	bookmarks.controller('BookmarksCtrl', function($stateParams, $log) {
		// e.g. http://localhost:8080/eggly/#/categories/Design => $stateParams.category == 'Design'
		$log.debug('current category: ' + $stateParams.category);
		
		var bookmarks = this;
		
		// set the category name in this state so it can be accessed from the template
		bookmarks.currentCategoryName = $stateParams.category;
	})
	
})();