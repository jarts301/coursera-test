(function () {
  'use strict';

  angular.module('MenuApp')
  .controller('MainItemsController', MainItemsController);

  MainItemsController.$inject = ['items'];
  function MainItemsController(items) {
    var itemsList = this;
    itemsList.items = items;

    console.log(itemsList.items);

    // var itemsP = MenuDataService.getItemsForCategory($stateParams.categoryId);
    //
    // itemsP.then(function (response) {
    //   itemsList.items = response.data;
    // }).catch(function (error) {
    //   console.log(error);
    // })
  }

})();
