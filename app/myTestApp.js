
var myTestApp = angular.module('myTestApp',['LocalStorageModule']);



myTestApp.controller('myController', function($scope, $window, localStorageService){
    
    $scope.myMessage=["Jacob","Peter"];

    $scope.submit = function(){
        if($scope.myMessage.indexOf($scope.firstName) !== -1){
            $scope.warnMessage="This name already exists";
        }else {
            $scope.myMessage.push($scope.firstName);
            $scope.clearWarnings();
        }
    };
    $scope.delete = function(){
        if($scope.myMessage.indexOf($scope.firstName) !== -1)
        {
            $scope.myMessage.splice($scope.myMessage.indexOf($scope.firstName),1);
            $scope.clearWarnings();
        }else{
            $scope.warnMessage="This item doesn't exist";
            
        }
    };
    $scope.deleteThis = function(paramToDelete){
        if ($window.confirm("Please confirm?")) {
        $scope.myMessage.splice($scope.myMessage.indexOf(paramToDelete),1);
        }
    };
    $scope.updateThis = function(paramToUpdate){
        $scope.firstName=paramToUpdate;
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
    };
    $scope.myDisableUpdate = function(){
        if ($scope.myMessage[$scope.myMessage.indexOf($scope.firstName)]){
            return false;
        }
        else if($scope.updateName == null || $scope.updateName == ""){
            return true;
        }
           else return true;
    };
    $scope.clearWarnings = function(){
        $scope.warnMessage="";
    };

    // View1 part with Form for chart manipulation

    $scope.firstChartVar = "120";
    $scope.chartType = "donut";
    

});