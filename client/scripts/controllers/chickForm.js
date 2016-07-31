mainApp.controller('ChickFormController', ['$scope', '$http', function($scope, $http){

  $scope.americauna = 0;
  $scope.bufforpington = 0;
  $scope.barredrock = 0;
  $scope.australorp = 0;
  $scope.silverwyandotte = 0;
  $scope.californiawhite = 0;
  $scope.rhodeislandred = 0;
  $scope.goldstar = 0;

  $scope.chickdate = [10/21/15, 10/31/15, 11/2/15];

  $scope.chickensum = function() {
    return $scope.americauna + $scope.bufforpington + $scope.barredrock +
    $scope.australorp + $scope.silverwyandotte + $scope.californiawhite +
    $scope.rhodeislandred + $scope.goldstar;

  }

  $scope.submitChicken = function() {
    console.log("Cluck!");
  }
}]);
