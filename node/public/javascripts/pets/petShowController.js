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
    this.pet = PetFactory.get({id: $stateParams.pet_id});
    console.log(this.pet);
  }
})();
