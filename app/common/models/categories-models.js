(function() {
	angular.module('eggly.models.categories', [])
		.service('CategoriesModel', function($http) {
			var model = this,
			URLS = {
				FETCH: 'data/categories.json'
			},
			// using this var along with the cache function seems to cause the browser to use the cache
			categories;
			
			function extract(result) {
				return result.data;
			}
			
			function cacheCategories(result) {
				categories = extract(result);
				return categories;
			}
			
			// returns a promise
			model.getCategories = function() {
				return $http.get(URLS.FETCH).then(cacheCategories);
			}
		});
})();