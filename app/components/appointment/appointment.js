
'use strict';
angular.module('appointment',['ngRoute'])
.config(function($routeProvider, $locationProvider) {
  $routeProvider
  .when('/appointment/makeappointment?type=1', {
    templateUrl: 'app/components/appointment/makeappointment.html',
    controller: 'AppointmentCtrl'
  });
  $locationProvider.html5Mode(true);
})

.controller('AppointmentCtrl', function ($scope) {
console.log("Appointment Controller reporting for duty.");
});
