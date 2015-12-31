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
						controller: 'BookmarksCtrl',
					}
				}
			})
			
		console.log('bookmarks module config called');
	})
	
	bookmarks.controller('BookmarksCtrl', function($scope, $stateParams, $log) {
		// e.g. http://localhost:8080/eggly/#/categories/Design => $stateParams.category == 'Design'
		$log.debug('current category: ' + $stateParams.category);
		
		// set the category name in this state so it can be accessed from the template
		$scope.currentCategoryName = $stateParams.category;
	})
	
})();