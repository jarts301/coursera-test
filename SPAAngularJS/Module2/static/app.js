(function () {
  'use strict';

  angular.module('ShoppingListCheckOff', [])
  .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

  function ShoppingListCheckOffService() {
    var service = this;

    var toBuyItems = [
      { name: "cookies", quantity: 10 },
      { name: "cheese", quantity: 2 },
      { name: "banana", quantity: 5 },
      { name: "orange", quantity: 9 },
      { name: "salmon", quantity: 1 },
      { name: "egg", quantity: 12 }
    ];

    var boughtItems = [];

    service.buyItem = function(itemIndex){
      boughtItems.push(toBuyItems[itemIndex]);
      toBuyItems.splice(itemIndex, 1);
    }

    service.getToBuyItems = function () {
      return toBuyItems;
    };

    service.getBoughtItems = function () {
      return boughtItems;
    };
  }

})();
