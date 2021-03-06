(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
/** Module Description **/

var app = angular.module('medeinalumber', ['ngRoute', 'ngAnimate']);

app.service('medeinalumber', function($http, $q) {
});

/** Controller **/

app.controller('MainCtrl', function($scope) {
  console.log('MainCtrl is loading');

  $scope.pageClass = 'page-home';
});

app.controller('ProductsCtrl', function($scope, $http) {
  console.log('ProductsCtrl is loading');

  $scope.pageClass = 'page-products';

  $http.get('../data/products.json').
    success(function(data, status, header, config) {
        $scope.products = data;
    }).

    error(function(data, status, header, config) {
        // log error
    });
});

app.controller('AboutCtrl', function($scope) {
  console.log("AboutCtrl is loading");

  $scope.pageClass = 'page-about';

});

app.controller('ContactCtrl', function($scope) {
  console.log("ContactCtrl");

  $scope.pageClass = 'page-contact';
});

app.controller('404Ctrl', function(req, res) {
  console.log(req, res);
  res.status(404);
});

/** Angular Routes **/

app.config(['$routeProvider', function($routeProvider) {
    $routeProvider

        // Home
        .when('/', {
            templateUrl: '../views/home.html',
            controller: 'MainCtrl'
        })

        // Products
        .when('/products', {
            templateUrl: '../views/products.html',
            controller: 'ProductsCtrl'
        })

        // About
        .when('/about', {
            templateUrl: '../views/about.html',
            controller: 'AboutCtrl'
        })

        // Contact
        .when('/contact', {
            templateUrl: '../views/contact.html',
            controller: 'ContactCtrl'
        })

        // 400
        .otherwise('/404', {
            templateUrl: '../views/404.html',
            controller: '404Ctrl',
        });

}]);

},{}]},{},[1])