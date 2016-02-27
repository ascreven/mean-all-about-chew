(function(){
  'use strict';
  angular
  .module('pets')
  .factory('PetFactory', [
    '$resource',
    FactoryFunction
  ]);
  function FactoryFunction($resource){
    return $resource('http://localhost:3000/api/pets/:id');
  }
})();
