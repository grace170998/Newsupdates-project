app.controller('TechnologyController', ['$scope', '$http', function($scope, $http) {
    $scope.loading = true;
    $scope.error = null;
    $scope.articles = [];

    // Replace the API key below with your own or manage it server-side
    const apiKey = '64db235de0d14b1e991f120f04fc9d14';  // NewsAPI key
    const apiUrl = `https://newsapi.org/v2/top-headlines?country=us&category=technology&apiKey=${apiKey}`;

    // Fetching technology news articles
    $http.get(apiUrl)
        .then(function(response) {
            console.log(response.data);  // Log the whole response to see the articles
            if (response.data.status === 'ok') {
                $scope.articles = response.data.articles;
                console.log('Articles:', $scope.articles);  // Log the articles to see the imageUrl
            } else {
                $scope.error = 'No technology articles found.';
            }
        })
        .catch(function(error) {
            $scope.error = 'Failed to fetch technology news. Please try again later.';
            console.error('Error fetching data:', error);
        })
        .finally(function() {
            $scope.loading = false;
        });
}]);
