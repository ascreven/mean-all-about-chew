(function(){
  "use strict";
  angular
  .module("pets")
  .controller("PetShowController", [
    '$scope',
    '$routeParams',
    "PetFactory",
    PetShowControllerFunction
  ]);

    function PetShowControllerFunction($scope, $routeParams, PetFactory){
    this.pet = PetFactory.get({id: $routeParams.id})
    // $scope.pet = PetFactory[$routeParams.id];
    console.log($routeParams)
    // $scope.pet = PetFactory.get({ id: $scope.id})
  }
})();
