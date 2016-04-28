// (function(){
//   'use strict';
//   angular
//   .module('pets')
//   .factory('PetFactory', [
//     '$resource',
//     FactoryFunction
//   ]);
//   function FactoryFunction($resource){
//     var resource =  $resource('/api/pets/:id', null, {
//       listPets: {
//         method: 'GET',
//         isArray: true
//       },
//       update: {
//         method: 'PUT'
//       }
//     });
//     return resource;
//   }
// })();
