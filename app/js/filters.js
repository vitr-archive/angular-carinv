'use strict';

/* Filters */

angular.module('carinvFilters', []).filter('checkmark', function() {
  return function(input) {
    return input ? '\u2713' : '\u2718';
  };
});

//We already have a limitTo filter built-in to angular,
//let's make a startFrom filter

angular.module('carinvFilters', []).filter('startFrom', function() {
    return function(input, start) {
        start = +start; //parse to int
        return input.slice(start);
    }
});

