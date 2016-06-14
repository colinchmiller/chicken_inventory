var mainApp = angular.module('mainApp', ['ngRoute']);

mainApp.controller('ChickenFormController', ['$scope', function($scope){
  console.log("ChickenFormController is running");
  $scope.firstname = 'First Name';
}]);
