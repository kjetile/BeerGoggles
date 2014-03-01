'use strict';

var addBarController = angular.module('addBarController', []);

addBarController.controller('AddBarController', ['$scope', '$http',
    function ($scope, $http) {
        $scope.addBar = function (barData) {
            $http({
                method  : 'POST',
                url     : insert url to scroogeAPI here
            })
        };
    }
 ]);