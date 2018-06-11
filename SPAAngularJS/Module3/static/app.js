(function () {
  'use strict';

  angular.module('NarrowItDownApp', [])
  .controller('NarrowItDownController', NarrowItDownController)
  .service('MenuSearchService', MenuSearchService)
  .directive('foundItems', FoundItemsDirective);

  NarrowItDownController.$inject = ['MenuSearchService'];
  function NarrowItDownController(MenuSearchService){
    var narrowItDown = this;

    narrowItDown.searchTerm="";
    narrowItDown.found=[];
    narrowItDown.noResults=false;
    narrowItDown.searching=false;

    this.search = function(){
      narrowItDown.noResults=false;
      narrowItDown.searching=true;

      if(narrowItDown.searchTerm){

        var promise = MenuSearchService.getMatchedMenuItems(narrowItDown.searchTerm);

        promise.then(function (response) {
          narrowItDown.found = response;

          if(narrowItDown.found.length <= 0){
            narrowItDown.noResults = true;
            narrowItDown.found=[];
          }else{
            narrowItDown.noResults = false;
          }

          narrowItDown.searching=false;
        }).catch(function (error) {
          console.log(error);
        })
      }else{
        narrowItDown.noResults = true;
        narrowItDown.found=[];
        narrowItDown.searching=false;
      }
    }

    narrowItDown.removeItem = function (itemIndex) {
      narrowItDown.found.splice(itemIndex,1);

      if(narrowItDown.found.length <= 0){
        narrowItDown.noResults = true;
      }
    }

  }

  MenuSearchService.$inject = ['$http'];
  function MenuSearchService($http) {
    var service = this;

    service.getMatchedMenuItems = function (searchTerm) {
      return $http({
        method: "GET",
        url: ("https://davids-restaurant.herokuapp.com/menu_items.json")
      }).then(function (result) {

        let foundItems=[];

        for (let menuItem of result.data.menu_items) {

          if(menuItem.description.toLowerCase().indexOf(searchTerm.toLowerCase()) >= 0){
              foundItems.push(menuItem);
          }
        }

        return foundItems;
      });
    }
  };

  function FoundItemsDirective() {
    var ddo = {
      templateUrl: 'found-items-template.html',
      scope: {
        found: '<',
        onRemove: '&'
      },
      controller: FoundItemsDirectiveController,
      controllerAs: 'list',
      bindToController: true
    };

    return ddo;
  }

  function FoundItemsDirectiveController() {
    var list = this;
  }

})();
