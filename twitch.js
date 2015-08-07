var app = angular.module('test', []);

function TestController($scope, $http) {
    $scope.areaOn = 1;
    $scope.setArea = function(num) {
        $scope.areaOn = num;
      } // - end - setArea
    $scope.thisOn = function(num) {
        return num === $scope.areaOn;
      } // - end - thisOn
    $http.get("https://api.twitch.tv/kraken/streams/freecodecamp").success(function(response) {
      $scope.stream = response;
    }); // - end - http - get - Twitch/dataResp

  } // - end - TestController
