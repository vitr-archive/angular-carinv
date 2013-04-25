'use strict';

/* Services */

angular.module('carinvServices', ['ngResource']).
    factory('Car', function($resource){
    var data = $resource('cars/:carId.json', {}, {
        query: {method:'GET', params:{carId:'cars'}, isArray:true}
      });
//    data.query(function(data){
//                    console.log(data.length);
//                }, function(err){
//                    alert('request failed');
//                });
  return data;
});
