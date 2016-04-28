
(function(){
'use strict';

  angular
  .module('pets')
  .controller('PetIndexController', [
    '$scope',
    'PetFactory',
    '$rootScope',
    petIndexControllerFunction
  ]);
  function petIndexControllerFunction( $scope, PetFactory, $rootScope){
    /*jshint validthis: true */
    $scope.pets = PetFactory
      $scope.newPet = {created_by: '', name: '', created_at: ''};

      $scope.pet = function(){
        $scope.newPet.created_by = $rootScope.current_user;
        $scope.newPet.created_at = Date.now();
        PetFactory.save($scope.newPet, function(){
          $scope.pets = PetFactory.query();
          $scope.newPet = {created_by: '', name: '', created_at: ''};
        });
      };
    }
})();
