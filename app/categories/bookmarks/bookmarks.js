(function () {
    'use strict'

    var bookmarks = angular.module('categories.bookmarks', [
        'categories.bookmarks.create',
        'categories.bookmarks.edit',
        'eggly.models.categories',
        'eggly.models.bookmarks'
    ]);

    bookmarks.config(function ($stateProvider) {

        $stateProvider
            .state('eggly.categories.bookmarks', {
                url: 'categories/:category',
                views: {
                    'bookmarks@': {
                        templateUrl: 'app/categories/bookmarks/bookmarks.tmpl.html',
                        controller: 'BookmarksListCtrl as bookmarksListCtrl'
                    }
                }
            })

        console.log('bookmarks module config called');
    })

    bookmarks.controller('BookmarksListCtrl', function ($stateParams, $log, BookmarksModel, CategoriesModel) {
        // e.g. http://localhost:8080/eggly/#/categories/Design => $stateParams.category == 'Design'
        $log.debug('current category: ' + $stateParams.category);

        var bookmarksListCtrl = this;

        // set the category name in this state so it can be accessed from the template
        //bookmarksListCtrl.currentCategoryName = $stateParams.category;
        CategoriesModel.setCurrentCategory($stateParams.category);

        BookmarksModel.getBookmarks()
            .then(function (bookmarks) {
                bookmarksListCtrl.bookmarks = bookmarks;
            });

        bookmarksListCtrl.getCurrentCategory = CategoriesModel.getCurrentCategory;
        bookmarksListCtrl.getCurrentCategoryName = CategoriesModel.getCurrentCategoryName;
    })
})();