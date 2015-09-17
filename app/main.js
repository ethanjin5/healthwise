
'use strict';
var app = angular.module('healthwise', ['ngRoute']);

app.config(function ($routeProvider, $locationProvider) {
	$routeProvider
		// Home
		.when("/", {templateUrl: "app/components/home/views/home.html", controller: "PageCtrl"})
		// Pages
		.when("/about", {templateUrl: "app/components/home/views/about.html", controller: "PageCtrl"})
		.when("/contact", {templateUrl: "app/components/home/views/contactus.html", controller: "PageCtrl"})
		.when("/service", {templateUrl: "app/components/home/views/service.html", controller: "PageCtrl"})
		.when("/appointment", {templateUrl: "app/components/home/views/appointment.html", controller: "PageCtrl"})
		.when("/faq", {templateUrl: "app/components/home/views/faq.html", controller: "PageCtrl"})
		/* etc… routes to other pages… */
		// Blog
		.when("/blog", {templateUrl: "app/components/home/views/blog.html", controller: "BlogCtrl"})
		.when("/blog/article1", {templateUrl: "app/components/home/views/article1.html", controller: "BlogCtrl"})
		.when("/blog/article2", {templateUrl: "app/components/home/views/article2.html", controller: "BlogCtrl"})
		// else 404
		.otherwise("/404", {templateUrl: "app/components/home/views/404.html", controller: "PageCtrl"});

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

// Activates the Carousel
$('.carousel').carousel({
interval: 5000
});

// Activates Tooltips for Social Links
$('.tooltip-social').tooltip({
selector: "a[data-toggle=tooltip]"
})
});