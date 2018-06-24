(function () {
  "use strict";

  angular.module('public')
  .controller('MyInfoController', MyInfoController);

  MyInfoController.$inject = ['myInfoData'];
  function MyInfoController(myInfoData) {
    var $ctrl = this;
    $ctrl.myInfoData=myInfoData;
  }


})();
