var module = angular.module('acmWebsite', ['ngRoute', ]);
/* 
 * TODO: Add ui.bootstrap
 * For some reason I can't use ui.bootstrap combined with ngRoute - Brian 07/14/2016
 */
/**
 *  Routes
 */
module.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
    // Home
        .when("/", {
            templateUrl: "partials/home.html"
            , controller: "PageCtrl"
        })
        // Pages
        .when("/about", {
            templateUrl: "partials/about.html"
            , controller: "PageCtrl"
        }).when("/events", {
            templateUrl: "partials/events.html"
            , controller: "PageCtrl"
        }).when("/teams", {
            templateUrl: "partials/teams.html"
            , controller: "PageCtrl"
        }).when("/contact", {
            templateUrl: "partials/contact.html"
            , controller: "PageCtrl"
        })
        // else 404
        .otherwise("/404", {
            templateUrl: "partials/404.html"
            , controller: "PageCtrl"
        });
}]);
module.controller('PageCtrl', function ( /*$scope, $location, $http */ ) {
    console.log("Page Controller reporting for duty.");
    // Activates Tooltips for Social Links
});
