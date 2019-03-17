
'use strict';
var app = angular.module('healthwise', ['ngRoute', 'ngMaterial', 'ngMessages', 'appointment']);

app.config(function ($routeProvider, $locationProvider) {
	$routeProvider
		// Home
		.when("/", {templateUrl: "app/components/home/views/home.html", controller: "PageCtrl"})
		// Pages
		.when("/about", {templateUrl: "app/components/home/views/about.html", controller: "PageCtrl"})
		.when("/contact", {templateUrl: "app/components/home/views/contactus.html", controller: "PageCtrl"})
		.when("/service", {templateUrl: "app/components/home/views/service.html", controller: "PageCtrl"})
		.when("/appointment", {templateUrl: "app/components/appointment/makeappointment.html", controller: "AppointmentCtrl"})
		.when("/comingsoon", {templateUrl: "app/components/home/views/coming_soon.html", controller: "PageCtrl"})
		.when("/faq", {templateUrl: "app/components/home/views/faq.html", controller: "PageCtrl"})
		/* etc… routes to other pages… */
		// else 404
		//.otherwise("/404", {templateUrl: "app/components/home/views/404.html", controller: "PageCtrl"});
		.otherwise({redirectTo: '/'});

		$locationProvider.html5Mode(true);

});


/**
* Controls the Blog
*/
app.controller('BlogCtrl', function (/* $scope, $location, $http */) {
console.log("Blog Controller reporting for duty.");
});


/**
* Controls all other Pages
*/
app.controller('PageCtrl', function (/* $scope, $location, $http */) {
console.log("Page Controller reporting for duty.");


});