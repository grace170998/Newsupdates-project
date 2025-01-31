angular.module('navbar', [])
.component('navbar', {
    templateUrl: './Components/navbar/navbar.html',
    controller: function ($scope, $location) {
        console.log('Navbar component initialized');
        $scope.search = function() {
            if ($scope.searchQuery && $scope.searchQuery.trim() !== '') {
                // Redirect to the search results page with query parameter
                $location.path('/search').search('query', $scope.searchQuery);
            }
        };
    
    }
    
    
});