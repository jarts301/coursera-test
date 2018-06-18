(function () {
  'use strict';

  angular.module('MenuApp')
  .config(RoutesConfig);

  RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
  function RoutesConfig($stateProvider, $urlRouterProvider) {

    // Redirect to home page if no other URL matches
    $urlRouterProvider.otherwise('/');

    // *** Set up UI states ***
    $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'src/menu-app/templates/home.template.html'
    })
    .state('categories', {
      url: '/categories',
      templateUrl: 'src/menu-app/templates/main-categories.template.html',
      controller: 'MainCategoriesController as categoriesList',
      resolve: {
        categories: ['MenuDataService', function (MenuDataService) {
          return MenuDataService.getAllCategories();
        }]
      }
    })
    .state('items', {
      url: '/items/{categoryId}',
      templateUrl: 'src/menu-app/templates/main-items.template.html',
      controller: 'MainItemsController as itemsList',
      resolve: {
        items: ['$stateParams', 'MenuDataService', function ($stateParams, MenuDataService) {
          return MenuDataService.getItemsForCategory($stateParams.categoryId).then( function (items) {
            return items;
          });
        }]
      }
    });

  }

})();
