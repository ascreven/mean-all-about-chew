(function(){
  "use strict";
  angular
  .module("pets")
  .controller("PetShowController", [
    "PetFactory",
    "$routeParams",
    PetShowControllerFunction
  ]);

  function PetShowControllerFunction(PetFactory, $routeParams){
    this.pet = PetFactory.get({id: $routeParams.pet_id});
    console.log(this.pet);
  }
})();
