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
