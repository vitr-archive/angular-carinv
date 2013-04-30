'use strict';

/* Controllers */

function CarListCtrl($scope, Car) {
  $scope.cars = Car.query();
  $scope.orderProp = 'age';

    $scope.currentPage = 0;
    $scope.pageSize = 10;

    $scope.$watch('filtered', function (newValue) {
        if (angular.isArray(newValue)) {
//            console.log(newValue.length);

            $scope.numPages = Math.ceil(newValue.length / $scope.pageSize);
            $scope.currentPage = 0;

            $scope.carMakes = [];
            for(var i = 0; i < newValue.length; i++) {
                var val = newValue[i]['make'];
                if(!$scope.carMakes.contains(val)) {
                    $scope.carMakes.push(val);
                }
            }
            $scope.carMakes.sort();

            $scope.carModels = [];
            for(var i = 0; i < newValue.length; i++) {
                var val = newValue[i]['model'];
                if(!$scope.carModels.contains(val)) {
                    $scope.carModels.push(val);
                }
            }
            $scope.carModels.sort();

            $scope.carEngines = [];
            for(var i = 0; i < newValue.length; i++) {
                var val = newValue[i]['engine'];
                if(!$scope.carEngines.contains(val)) {
                    $scope.carEngines.push(val);
                }
            }
            $scope.carEngines.sort();

            $scope.carYears = [];
            for(var i = 0; i < newValue.length; i++) {
                var val = newValue[i]['year'];
                if(!$scope.carYears.contains(val)) {
                    $scope.carYears.push(val);
                }
            }
            $scope.carYears.sort();

            $scope.carTransmissions = [];
            for(var i = 0; i < newValue.length; i++) {
                var val = newValue[i]['transmission'];
                if(!$scope.carTransmissions.contains(val)) {
                    $scope.carTransmissions.push(val);
                }
            }
            $scope.carTransmissions.sort();

            $scope.carBodys = [];
            for(var i = 0; i < newValue.length; i++) {
                var val = newValue[i]['body'];
                if (!val)
                    continue;
                if(!$scope.carBodys.contains(val)) {
                    $scope.carBodys.push(val);
                }
            }
            $scope.carBodys.sort();

        }
    }, true);



    $scope.typeOptions = [
    { name: 'Feature', value: 'feature' },
    { name: 'Bug', value: 'bug' },
    { name: 'Enhancement', value: 'enhancement' }
    ];
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


Array.prototype.contains = function(v) {
    for(var i = 0; i < this.length; i++) {
        if(this[i] === v) return true;
    }
    return false;
};