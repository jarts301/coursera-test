(function () {
  'use strict';

  angular.module('ShoppingListCheckOff')
  .controller('AlreadyBoughtController', AlreadyBoughtController);

  AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
  function AlreadyBoughtController(ShoppingListCheckOffService) {
    var alreadyBought = this;

    alreadyBought.boughtItems = ShoppingListCheckOffService.getBoughtItems();

  }

})();
