(function(){
  'use strict';
  angular
  .module('pets')
  .factory('PetFactory', [
    '$resource',
    FactoryFunction
  ]);
  function FactoryFunction($resource){
    return $resource('/api/pets/:id');
  }
})();
