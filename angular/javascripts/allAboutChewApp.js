var app = angular.module('allAboutChewApp', []);

app.controller('mainController', function( $scope ){
  $scope.pets = [];
  $scope.newPet = {created_by: '', text: '', created_at: ''};

  $scope.pet = function(){
    $scope.newPet.created_at = Date.now();
    $scope.pets.push($scope.newPet);
    $scope.newPet = {created_by: '', name: '', created_at: ''};
  };
});

app.controller('authController', function( $scope ){
  $scope.user = {username: '', password: ''};
  $scope.error_message = '';

  $scope.login = function(){
    $scope.error_message = 'login request for ' + $scope.user.username;
  };

  $scope.register = function(){
    $scope.error_message = 'register request for ' + $scope.user.username;
  }
})
