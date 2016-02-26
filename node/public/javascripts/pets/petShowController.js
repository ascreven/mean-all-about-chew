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
    $scope.pet = PetFactory.get({id: $stateParams.id});
  }
})();
