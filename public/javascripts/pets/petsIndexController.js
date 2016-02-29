
(function(){
'use strict';

  angular
  .module('pets')
  .controller('PetIndexController', [
    '$scope',
    'PetFactory',
    petIndexControllerFunction
  ]);
  function petIndexControllerFunction( $scope, PetFactory){
    /*jshint validthis: true */
    $scope.pets = PetFactory.listPets();
    
    // $scope.pet = PetFactory.get($stateParams.id);
    // $scope.newPet = {created_by: '', text: '', created_at: ''};
    // $scope.pet = function(){
    //   $scope.newPet.created_by = $rootScope.current_user;
    //   $scope.newPet.created_at = Date.now();
    //   petService.save($scope.newPet, function(){
    //     $scope.pets = petService.query();
    //     $scope.newPet = {created_by: '', text: '', created_at: ''};
    //   });
    // };
  }
})();
