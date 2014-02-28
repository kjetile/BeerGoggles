'use strict';

var mapController = angular.module('mapController', []);

mapController.controller('MapController', ['$scope',
    function($scope) {

        var pos;

        $scope.map = {
            center: {
                latitude: 45,
                longitude: -73
            },
            zoom: 8
        };

        // Try HTML5 geolocation
        if(navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function(position) {
                /*pos = new google.maps.LatLng(position.coords.latitude,
                    position.coords.longitude);*/

                $scope.map = {
                    center: {
                        latitude: position.coords.latitude,
                        longitude: position.coords.longitude
                    },
                    zoom: 8,
                    draggable: 'true'
                };

                /*var infowindow = new google.maps.InfoWindow({
                 map: map,
                 position: pos,
                 content: 'Location found using HTML5.'
                 });*/

                <!--map.setCenter(pos); -->
            }, function() {
                handleNoGeolocation(true);
            });
        } else {
            // Browser doesn't support Geolocation
            handleNoGeolocation(false);
        }



        function handleNoGeolocation(errorFlag) {
            if (errorFlag) {
                var content = 'Error: The Geolocation service failed.';
            } else {
                var content = 'Error: Your browser doesn\'t support geolocation.';
            }

            var options = {
                map: map,
                position: new google.maps.LatLng(60, 105),
                content: content
            };

            map.setCenter(options.position);
        }


    }]);
