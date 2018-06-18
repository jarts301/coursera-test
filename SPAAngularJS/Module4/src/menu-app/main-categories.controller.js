(function () {
  'use strict';

  angular.module('MenuApp')
  .controller('MainCategoriesController', MainCategoriesController);

  MainCategoriesController.$inject = ['categories'];
  function MainCategoriesController(categories) {
    var categoriesList = this;
    categoriesList.categories = categories;

    // var categoriesP = MenuDataService.getAllCategories();
    //
    // categoriesP.then(function (response) {
    //   categoriesList.categories = response.data;
    // }).catch(function (error) {
    //   console.log(error);
    // })
  }

})();
