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
