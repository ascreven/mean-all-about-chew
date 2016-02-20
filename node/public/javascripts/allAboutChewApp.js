var app = angular.module('allAboutChewApp', ['ngRoute', 'ngResource']).run(function($http, $rootScope){
  $rootScope.authenticated = false;
  $rootScope.current_user = '';

  $rootScope.signout = function(){
    $http.get('auth/signout');
    $rootScope.authenticated = false;
    $rootScope.current_user = '';
  };
});

app.config(function($routeProvider){
  $routeProvider
  .when('/', {
    templateUrl: 'main.html',
    controller: 'mainController'
  })
  .when('/login', {
    templateUrl: 'login.html',
    controller: 'authController'
  })
  .when('/register', {
    templateUrl: 'register.html',
    controller: 'authController'
  });
});

app.factory('petService', function($resource){
  return $resource('/api/pets/:id');
});

app.controller('mainController', function( petService, $scope, $rootScope ){
  $scope.pets = petService.query();
  $scope.newPet = {created_by: '', text: '', created_at: ''};

  $scope.pet = function(){
    $scope.newPet.created_by = $rootScope.current_user;
    $scope.newPet.created_at = Date.now();
    petService.save($scope.newPet, function(){
      $scope.pets = petService.query();
      $scope.newPet = {created_by: '', text: '', created_at: ''};
    });
  };
});


app.controller('authController', function( $scope, $http, $rootScope, $location ){
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
});
