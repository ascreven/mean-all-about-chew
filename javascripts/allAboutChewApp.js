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
