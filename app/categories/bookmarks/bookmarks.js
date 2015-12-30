(function() {
	'use strict'
	
	var bookmarks = angular.module('categories.bookmarks', []);
	
	bookmarks.config(function($stateProvider) {
		
		$stateProvider
			.state('cookbook.categories.bookmarks', {
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
		$scope.currentCategoryName = $stateParams.category;
		$log.debug('current category: ' + $scope.currentCategoryName);
	})
	
})();