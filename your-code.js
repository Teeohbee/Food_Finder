angular.module('lunchFinder', ['cpLib'
  // Add module dependencies here.
]);

angular.module('lunchFinder').controller('GiveTheGovernmentABurrito', function(PackagesFactory, $scope, $http) {

  $scope.doSearch = function() {
    if ($scope.searchTerm === "") {
      $scope.searchData = "";
    } else {
      PackagesFactory.searchPackages($scope.searchTerm, $scope.searchPostCode).then(function(results) {
        $scope.searchData = results.data;
      });
    };
  };
  // Your JavaScript goes here.
  // Your code should use our JS library's `PackagesFactory.searchPackages` method to search
  // for burritos that can be delivered to the Houses of Parliament in London.
  // The API URL that should be called is:
  // https://api.citypantry.com/packages/search?name=Burrito&postcode=SW1A%200AA
});
