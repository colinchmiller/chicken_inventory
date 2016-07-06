var mainApp = angular.module('mainApp', ['ngRoute']);

mainApp.controller('ChickenFormController', ['$scope', function($scope){

  $scope.americauna = 0;
  $scope.bufforpington = 0;
  $scope.barredrock = 0;
  $scope.australorp = 0;
  $scope.silverwyandotte = 0;
  $scope.californiawhite = 0;
  $scope.rhodeislandred = 0;
  $scope.goldstar = 0;

  $scope.chickensum = function() {
    return $scope.americauna + $scope.bufforpington + $scope.barredrock +
    $scope.australorp + $scope.silverwyandotte + $scope.californiawhite +
    $scope.rhodeislandred + $scope.goldstar;

  }

}]);
