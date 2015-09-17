'use strict';
var appointment = angular.module('healthwise.appointment',['ngRoute']);
appointment.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/appointment/makeappointment?type=1', {
    templateUrl: 'app/components/appointment/makeappointment.html',
    controller: 'AppointmentCtrl'
  });
}]);

appointment.controller('AppointmentCtrl', function ($scope) {
console.log("Appointment Controller reporting for duty.");
});