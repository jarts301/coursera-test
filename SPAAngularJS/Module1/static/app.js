(function () {
  'use strict';

  angular.module('LunchCheck', [])
  .controller('LunchCheckController', LunchCheckController);

  LunchCheckController.$inject = ['$scope'];
  function LunchCheckController($scope) {

    $scope.textMessage = "";

    $scope.check = function () {
      var values = []
      if($scope.inputText){
        values = $scope.inputText.split(',');
        if(values.length <= 3){
          $scope.textMessage = 'Enjoy!';
        }else
        if(values.length > 3){
          $scope.textMessage = 'Too much!';
        }
      }else{
        $scope.textMessage = 'Please enter data first';
      }
    };

  }

})();
