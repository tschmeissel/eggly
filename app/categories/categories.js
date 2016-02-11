(function () {
    'use strict'

    var categories = angular.module('categories', [
        'eggly.models.categories'
    ]);

    categories.config(function ($stateProvider) {

        $stateProvider
            .state('eggly.categories', {
                url: '/',
                // this state cotains these two views
                views: {
                    // the '@' marks it as an absolute path
                    // meaning it targets this named view with any unamend state
                    'categories@': {
                        controller: 'CategoriesCtrl as categoriesCtrl',
                        templateUrl: 'app/categories/categories.tmpl.html'
                    },
                    'bookmarks@': {
                        controller: 'BookmarkListCtrl as bookmarkListCtrl',
                        templateUrl: 'app/categories/bookmarks/bookmarks.tmpl.html'
                    }
                }
            });

        console.log('categories module config called');
    })

    categories.controller('CategoriesCtrl', function CategoriesCtrl($scope, $log, CategoriesModel) {
        $log.debug('categories ctrl called');

        var categoriesCtrl = this;
        CategoriesModel.getCategories()
            .then(function (result) {
                categoriesCtrl.categories = result;
            });
    })
})();