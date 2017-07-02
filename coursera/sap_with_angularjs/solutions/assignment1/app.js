(function () {
  'use strict';
  angular.module('lunchCheck', [])
  .controller('LunchCheckController', LunchCheckController
  );
  LunchCheckController.inject=['$scope'];
  function LunchCheckController($scope){
    $scope.list="";
    $scope.checkList= function(){
      return showMessage($scope.list);
    };
    var  showMessage= function (list) {
      var msgToEmpty="Please enter data first";
      var msgToEnjoy="Enjoy!!!!"
      var msgToTooMuch="Is too much";
      if (!list){
        $scope.message=msgToEmpty;
      }
      else{
        var numOfItem= getNumOfItem(list);
        $scope.message= numOfItem > 3 ? msgToTooMuch : msgToEnjoy;
      }
    }
    var getNumOfItem= function (list){
      list =list.split(',').filter(function(list){
        return list.length>0;
      });
      return list.length;
    };
  }
})();
