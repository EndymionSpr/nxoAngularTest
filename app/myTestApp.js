// import * as localStore from '@zellwk/javascript/browser/localstore'

var myTestApp = angular.module('myTestApp',[]);

ourStorage = window.localStorage;

// ourStorage = localStore;

myTestApp.controller('myController', function($scope){
    $scope.myMessage=["Jacob","Peter"];
    // ourStorage = window.localStorage;
    
    $scope.submit = function(){
        $scope.myMessage.push($scope.firstName);
    }
    $scope.delete = function(){
        $scope.myMessage.splice($scope.myMessage.indexOf($scope.firstName),1);
    }
    $scope.update = function(){
        $scope.myMessage[$scope.myMessage.indexOf($scope.firstName)]=$scope.updateName;
    }
    $scope.save = function(){
        // Content of fucntion that saves to DB.
        ourStorage.setItem($scope.saveAs, JSON.stringify($scope.myMessage));
        // ourStorage.setItem($scope.saveAs, ($scope.myMessage));
        
    }
    $scope.load = function(){
        $scope.myMessage = JSON.parse(ourStorage.getItem($scope.loadThis));
        // $scope.myMessage = (ourStorage.getItem($scope.loadThis));
        
    }
    
});