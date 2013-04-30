'use strict';

/* Filters */

var myApp = angular.module('carinvFilters', []);

myApp.filter('reverse', function () {
    return function(input) {
      return input ? '\u2713' : '\u2718';
    };
  });

myApp.filter('checkmark', function() {
  return function(input) {
    return input ? '\u2713' : '\u2718';
  };
});





myApp.filter('searchCarBody', function() {
    return function(input, query) {
    if (!query)
        return input;
    var output = [];
    for(var i = 0; i < input.length; i++) {
        if (input[i].body == query)
            output.push(input[i]);
    }
        return output;
    }
});




//We already have a limitTo filter built-in to angular,
//let's make a startFrom filter

myApp.filter('startFrom', function() {
    return function(input, start) {
        start = +start; //parse to int
        return input.slice(start);
    }
});



