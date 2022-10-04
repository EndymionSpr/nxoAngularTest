
var myTestApp = angular.module('myTestApp',['LocalStorageModule']);



myTestApp.controller('myController', function($scope, localStorageService){
    $scope.myMessage=["Jacob","Peter"];
    
    $scope.submit = function(){
        $scope.myMessage.push($scope.firstName);
    };
    $scope.delete = function(){
        $scope.myMessage.splice($scope.myMessage.indexOf($scope.firstName),1);
    };
    $scope.update = function(){
        $scope.myMessage[$scope.myMessage.indexOf($scope.firstName)]=$scope.updateName;
    };
    $scope.save = function(){
        // Content of function that saves to DB.
        localStorageService.set($scope.saveAs, ($scope.myMessage));
        
    };
    $scope.load = function(){
        // Content of function that loads from DB.
        $scope.myMessage = (localStorageService.get($scope.loadThis));
        
    };
    
    // View1 part with Form for chart manipulation

    $scope.firstChartVar = "120";
    $scope.chartType = "donut";
    

});