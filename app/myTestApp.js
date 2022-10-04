
var myTestApp = angular.module('myTestApp',['LocalStorageModule']);



myTestApp.controller('myController', function($scope, localStorageService){
    
    $scope.myMessage=["Jacob","Peter"];

    $scope.submit = function(){
        $scope.myMessage.push($scope.firstName);
    };
    $scope.delete = function(){
        if($scope.myMessage.indexOf($scope.firstName) !== -1)
        {
            $scope.myMessage.splice($scope.myMessage.indexOf($scope.firstName),1);
        }
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
    // Function enabling Load button when value is viable. 
    $scope.myDisableLoad = function(){
        if (localStorageService.get($scope.loadThis)){
            return false;
        }
        else return true;
    }
    $scope.myDisableUpdate = function(){
        if ($scope.myMessage[$scope.myMessage.indexOf($scope.firstName)]){
            return false;
        }
        else return true;
    }

    // View1 part with Form for chart manipulation

    $scope.firstChartVar = "120";
    $scope.chartType = "donut";
    

});