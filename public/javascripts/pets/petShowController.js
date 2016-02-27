(function(){
  "use strict";
  angular
  .module("pets")
  .controller("PetShowController", [
    "PetFactory",
    "$stateParams",
    PetShowControllerFunction
  ]);

  function PetShowControllerFunction(PetFactory, $stateParams){
    this.pet = PetFactory.get({id: '56c7aea8f438e80f4826e334'})
    // var pet = PetFactory.get({ id: $scope.id})
  }
})();
