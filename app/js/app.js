'use strict';


// Declare app level module which depends on filters, and services


angular.module('carinv', ['carinvFilters', 'carinvServices']).
  config(['$routeProvider', function($routeProvider) {
  $routeProvider.
      when('/cars', {templateUrl: 'partials/car-list.html',   controller: CarListCtrl}).
      when('/cars/:carId', {templateUrl: 'partials/car-detail.html', controller: CarDetailCtrl}).
      otherwise({redirectTo: '/cars'});
}]);

/*

angular.module('myApp', ['myApp.filters', 'myApp.services', 'myApp.directives', 'myApp.controllers']).
  config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/view1', {templateUrl: 'partials/partial1.html', controller: 'MyCtrl1'});
    $routeProvider.when('/view2', {templateUrl: 'partials/partial2.html', controller: 'MyCtrl2'});
    $routeProvider.otherwise({redirectTo: '/view1'});
  }]);
*/
