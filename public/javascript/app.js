(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
/** Module Description **/

var app = angular.module('medeinalumber', ['ngRoute']);

app.service('medeinalumber', function($http, $q) {
});

/** Controller **/

app.controller('MainCtrl', function() {
  console.log('MainCtrl is loading');
});

app.controller('ProductsCtrl', function($scope, $http) {
  console.log('ProductsCtrl is loading');

  $http.get('../data/products.json').
    success(function(data, status, header, config) {
        $scope.products = data;
    }).

    error(function(data, status, header, config) {
        // log error
    });
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
        });
}]);

},{}]},{},[1])