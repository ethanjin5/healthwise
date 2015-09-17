'use strict';
var app = angular.module('healthwise.appointment');
app.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/appointment/makeappointment?type=1', {
    templateUrl: 'views/partials/makeappointment.html',
    controller: 'AppointmentCtrl'
  });
}]);

app.controller('AppointmentCtrl', function ($scope) {
console.log("Appointment Controller reporting for duty.");
});