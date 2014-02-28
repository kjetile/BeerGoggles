'use strict'

/* Beer Gogggles App module */

var beergogglesApp = angular.module('beergogglesApp', [
    'ngRoute',
    'google-maps',
    'ngAutocomplete',
    'mapController',
    'addBarController'
]);

beergogglesApp.config(['$routeProvider',
   function($routeProvider) {
       $routeProvider.
	   when('/map', {
	       templateUrl: 'partials/map.html',
	       controller: 'MapController'
           }).
       when('/addBar', {
           templateUrl: 'partials/addBar.html',
           controller: 'AddBarController'
           }).
	   otherwise({
	       redirectTo: '/map'
	   });
}]);

