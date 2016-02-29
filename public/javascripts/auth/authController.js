(function(){
  'use strict';
  angular
  .module('auth')
  .controller('authController', [
    '$scope',
    '$http',
    '$rootScope',
    '$location',
    authControllerFunction
  ]);
  function authControllerFunction( $scope, $http, $rootScope, $location ){
    console.log('hello');
      $scope.user = {username: '', password: ''};
      $scope.error_message = '';

      $scope.login = function(){
        $http.post('/auth/login', $scope.user).success(function(data){
          if(data.state == 'success'){
            $rootScope.authenticated = true;
            $rootScope.current_user = data.user.username;
            $location.path('/');
          }
          else{
            $scope.error_message = data.message;
          }
        });
      };

      $scope.register = function(){
        $http.post('/auth/signup', $scope.user).success(function(data){
          if(data.state == 'success'){
            $rootScope.authenticated = true;
            $rootScope.current_user = data.user.username;
            $location.path('/');
          }
          else{
            $scope.error_message = data.message;
          }
        });
      };
    }
})();
