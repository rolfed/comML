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
