(function(){
  "use strict";
  angular
  .module("pets")
  .controller("PetEditController", [
    '$scope',
    "PetFactory",
    "$stateParams",
    PetEditControllerFunction
  ]);

  function PetEditControllerFunction($scope, PetFactory, $stateParams){
    // get pet using id
    $scope.pet = PetFactory.get({id: $stateParams.id});
    $scope.update = function(){
      $scope.pet.$update({id: $stateParams.id});
    };
    $scope.delete = function(){
      $scope.pet.$delete({id: $stateParams.id});
    };
  }
})();
