(function() {
	'use strict'
	
	var bookmarks = angular.module('categories.bookmarks', []);
	
	bookmarks.config(function($stateProvider) {
		
		$stateProvider
			.state('eggly.categories.bookmarks', {
				url: 'categories/:category',
				views: {
					'bookmarks@': {
						controller: 'BookmarksCtrl',
						templateUrl: 'app/categories/bookmarks/bookmarks.tmpl.html',
					}
				}
			})
	})
	
	bookmarks.controller('BookmarksCtrl', function($scope, $stateParams, $log) {
		// e.g. http://localhost:8080/eggly/#/categories/Design => $stateParams.category == 'Design'
		$log.debug('current category: ' + $stateParams.category);
	})
	
})();