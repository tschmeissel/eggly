(function() {
	'use strict'
	
	var app = angular.module('egglyApp', [
		'ui.router',
		'categories',
		'categories.bookmarks',
		'eggly.models.bookmarks',
		'eggly.models.categories'
	]);
	
	app.config(function($logProvider) {
		 $logProvider.debugEnabled(true);
	});
	
	app.config(function($stateProvider, $urlRouterProvider) {
		
		$stateProvider
			.state('eggly', {
				url: '',
				abstract: true
			})
		
		$urlRouterProvider.otherwise('/');
	});
})();