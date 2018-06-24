(function () {
  "use strict";

  angular.module('public')
  .controller('SignUpController', SignUpController);

  SignUpController.$inject = ['MenuService'];
  function SignUpController(MenuService) {
    var $ctrl = this;
    $ctrl.firstName = '';
    $ctrl.lastName = '';
    $ctrl.email = '';
    $ctrl.phone = '';
    $ctrl.favoriteDish = '';
    $ctrl.favoriteDishObject = {};
    $ctrl.favoriteDishMessage = '';
    $ctrl.SignUpMessage = '';
    $ctrl.favoriteDishValid = false;

    $ctrl.validateDish = function(){
      MenuService.getMenuItem($ctrl.favoriteDish).then(function(item){
        $ctrl.favoriteDishObject = item;
        $ctrl.favoriteDishMessage = '';
        $ctrl.favoriteDishValid = true;
      }).catch(function(error){
        $ctrl.favoriteDishObject = {};
        $ctrl.favoriteDishMessage = 'No such menu number exists!';
        $ctrl.favoriteDishValid = false;
      });
    }

    $ctrl.signUp = function(){
      var formData = {
        firstName: $ctrl.firstName,
        lastName: $ctrl.lastName,
        email: $ctrl.email,
        phone: $ctrl.phone,
        favoriteDish: $ctrl.favoriteDishObject
      }
      MenuService.saveSignUpData(formData);
      $ctrl.SignUpMessage='Your information has been saved!';
    }

  }


})();
