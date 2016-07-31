var mainApp = angular.module('mainApp', ['ngRoute']);

mainApp.config(['$routeProvider', function($routeProvider){
  $routeProvider.
    when('/chickendescriptions', {
      templateUrl: 'assets/views/routes/chickendescriptions.html',
      controller: ''
    }).
    when('/chickform', {
      templateUrl: 'assets/views/routes/chickform.html',
      controller: 'ChickFormController'
    }).
    when('/chicktips', {
      templateUrl: 'assets/views/routes/chicktips.html',
      controller: ''
    }).
      otherwise({
        redirectTo: 'chickform'
      })


}]);
