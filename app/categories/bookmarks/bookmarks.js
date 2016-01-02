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
						controller: 'BookmarksCtrl as bookmarksListCtrl',
					}
				}
			})
			
		console.log('bookmarks module config called');
	})
	
	bookmarks.controller('BookmarksCtrl', function($stateParams, $log, BookmarksModel) {
		// e.g. http://localhost:8080/eggly/#/categories/Design => $stateParams.category == 'Design'
		$log.debug('current category: ' + $stateParams.category);
		
		var bookmarksListCtrl = this;
		
		// set the category name in this state so it can be accessed from the template
		bookmarksListCtrl.currentCategoryName = $stateParams.category;
		bookmarksListCtrl.bookmarks = BookmarksModel.getBookmarks();
	})
	
})();