'use strict';
angular.module('appointment',['ngMaterial','ngMessages'])
.controller('AppointmentCtrl', function ($scope, $routeParams) {
	$scope.date = new Date();
  console.log("asdf");
});
