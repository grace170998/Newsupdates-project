angular.module('newsUpdatesApp')
.controller('SearchController', function ($scope, $location, NewsService) {
    var query = $location.search().query;  // Get query parameter from URL
    $scope.query = query;  // Pass the query to the template

    // Fetch news based on the query
    NewsService.searchNews(query).then(function (response) {
        $scope.newsResults = response.data.articles;  // Store the search results in scope
    }, function (error) {
        $scope.errorMessage = "Error fetching news.";
    });
});
