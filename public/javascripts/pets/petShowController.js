(function(){
  "use strict";
  angular
  .module("pets")
  .controller("PetShowController", [
    '$scope',
    "PetFactory",
    "$stateParams",
    PetShowControllerFunction
  ]);

  function PetShowControllerFunction($scope, PetFactory, $stateParams){
    // this.pet = PetFactory.get({id: '56c7aea8f438e80f4826e334'});
    $scope.pet = PetFactory.get({id: $stateParams.id});
    console.log($stateParams);
    // var pet = PetFactory.get({ id: $scope.id})
  }
})();
