/** Angular Routes **/

app.config(['$routeProvider', function($routeProvider) {
    $routeProvider

        // Home
        .when('/', {
            templateUrl: '../views/home.html',
            controller: 'MainCtrl'
        });
}]);
