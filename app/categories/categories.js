(function() {
	'use strict'
	
	var categories = angular.module('categories', []);
	
	categories.config(function($stateProvider) {

		$stateProvider
			.state('eggly.categories', {
				url: '/',
				// this state cotains these two views
				views: {
					// the '@' marks it as an absolute path
					// meaning it targets this named view with any unamend state
					'categories@': {
						controller: 'CategoriesCtrl',
						templateUrl: 'app/categories/categories.tmpl.html'
					},
					'bookmarks@': {
						controller: 'BookmarksCtrl',
						templateUrl: 'app/categories/bookmarks/bookmarks.tmpl.html'
					}
				}
			})
	})
	
	categories.controller('CategoriesCtrl', function CategoriesCtrl($scope) {
	})
	
})();