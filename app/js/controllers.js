'use strict';

/* Controllers */

function CarListCtrl($scope, Car) {
  $scope.cars = Car.query();
  $scope.orderProp = 'age';

    $scope.currentPage = 0;
    $scope.pageSize = 10;

    $scope.$watch('filtered', function (newValue) {
        if (angular.isArray(newValue)) {
            console.log(newValue.length);
            $scope.numPages = Math.ceil(newValue.length / $scope.pageSize);
            $scope.currentPage = 0;
        }
    }, true);
}



//PhoneListCtrl.$inject = ['$scope', 'Phone'];



function CarDetailCtrl($scope, $routeParams, Car) {
    $routeParams.carId = 'cars1';
  $scope.car = Car.get({carId: $routeParams.carId}, function(car) {
//    $scope.mainImageUrl = car.images[0];
  });

  $scope.setImage = function(img) {
    $scope.mainImageUrl = img;
  }
}

//PhoneDetailCtrl.$inject = ['$scope', '$routeParams', 'Phone'];
