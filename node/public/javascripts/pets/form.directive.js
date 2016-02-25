(function(){
  'use strict';
  angular
  .module('pets')
  .directive('petForm', [
    'PetFactory',
    '$state',
    PetFormDirectiveFunction
  ]);
  function PetFormDirectiveFunction(PetFactory, $state){
    return{
      templateUrl: 'javascripts/pets/petForm.html',
      scope: {
        pet: '='
      },
      link: function(scope){
        scope.create = function(){
          scope.pet.$save(function(response){
            $state.go("petIndex", {}, {reload: true});
          });
        };
      }
    };
  }
  })();
