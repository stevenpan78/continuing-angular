angular.module("angleApp").controller("myCtrl",["$scope",function(t){t.city="london",t.$watch("city",function(){t.city=t.city.toUpperCase()})}]);