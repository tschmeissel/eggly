(function() {
	angular.module('eggly.models.bookmarks', [])
		.service('BookmarksModel', function($http) {
			var model = this,
			URLS = {
				FETCH: 'data/bookmarks.json'
			},
			bookmarks;

			function extract(result) {
				return result.data;
			}
			
			function cacheBookmarks(result) {
				bookmarks = extract(result);
				return bookmarks;
			}
			
			// returns a promise
			model.getBookmarks = function() {
				return $http.get(URLS.FETCH).then(cacheBookmarks);
			}
		});
})();