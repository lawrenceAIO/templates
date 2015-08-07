var app = angular.module('test',[]);

function TestController($scope, $http){
  $scope.areaOn = 1;
  $scope.setArea = function(num){
    $scope.areaOn = num;
  } // - end - setArea
  $scope.thisOn = function(num){
    return num === $scope.areaOn;
  } // - end - thisOn
  
  $http.get().then(function(dataResp){
    
  }) // - end - http - get - Twitch
  
} // - end - TestController
app.controller('TestController',TestController);
