(function () {
  'use strict';

  angular.module('myFirstApp', [])

  .controller('MyFirstController', function ($scope) {
    $scope.name="Yuri";
    $scope.sayHello=function (name) {
      return "hello"+name;
    }
  })
  .controller('nameCalculatorController', function ($scope) {
    $scope.string = "";

    $scope.totalValue = 0;

    $scope.displayNumeric= function () {
      var totalValueName = claculateNumericValue($scope.string);
      $scope.totalValue = totalValueName;
    };

    function claculateNumericValue(string) {
      var totalStringValue = 0;
      for (var i = 0; i < string.length; i++) {
        totalStringValue += string.charCodeAt(i);
      }

      return totalStringValue;
    }
  });


);

/*
angular.module('nameCalculator', [])
.controller('nameCalculatorController', function ($scope) {
$scope.name ="";
$scope.totalValue = 0;
});*/

})();
