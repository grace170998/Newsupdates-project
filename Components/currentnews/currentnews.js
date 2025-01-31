angular.module('newsUpdatesApp')
.controller('CurrentNewsController', ['$scope', '$http', function($scope, $http) {
    $scope.loading = true;
    $scope.error = null;
    $scope.articles = [];

    // Initialize the bookmarked articles from localStorage or as an empty array
    $scope.bookmarkedArticles = JSON.parse(localStorage.getItem('bookmarkedArticles')) || [];

    // API endpoint for latest news
    const apiKey = '64db235de0d14b1e991f120f04fc9d14';
    const apiUrl = `https://newsapi.org/v2/everything?q=technology&apiKey=${apiKey}`;

    // Fetch articles from the API
    $http.get(apiUrl)
        .then(function(response) {
            if (response.data.articles && response.data.articles.length) {
                $scope.articles = response.data.articles;
            } else {
                $scope.error = 'No articles found.';
            }
        })
        .catch(function(error) {
            $scope.error = 'Failed to fetch news. Please try again later.';
            console.error('Error fetching data:', error);
        })
        .finally(function() {
            $scope.loading = false;
        });

    // Function to bookmark an article
    $scope.bookmarkArticle = function(article) {
        const alreadyBookmarked = $scope.bookmarkedArticles.some(function(bookmark) {
            return bookmark.url === article.url;
        });

        if (!alreadyBookmarked) {
            // Add the article to the bookmarked list
            $scope.bookmarkedArticles.push(article);

            // Save the updated list to localStorage
            localStorage.setItem('bookmarkedArticles', JSON.stringify($scope.bookmarkedArticles));
            console.log('Article bookmarked:', article.title);
        } else {
            console.log('Article already bookmarked:', article.title);
        }
    };

    // Check if the article is bookmarked
    $scope.isBookmarked = function(article) {
        return $scope.bookmarkedArticles.some(function(bookmark) {
            return bookmark.url === article.url;
        });
    };
}]);

