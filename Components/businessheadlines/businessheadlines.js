 //var app = angular.module('newsApp', []);

 app.controller('NewsController', ['$scope', '$http', function($scope, $http) {
    $scope.loading = true;
    $scope.error = null;
    $scope.articles = [];
    $scope.bookmarkedArticles = JSON.parse(localStorage.getItem('bookmarkedArticles')) || []; // Load from localStorage

    const apiKey = '64db235de0d14b1e991f120f04fc9d14';
    const apiUrl = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=${apiKey}`;

    // Fetch articles from the API
    $http.get(apiUrl)
        .then(function(response) {
            if (response.data.articles && response.data.articles.length) {
                $scope.articles = response.data.articles;
            } else {
                $scope.error = 'No articles available at the moment.';
            }
        })
        .catch(function(error) {
            $scope.error = 'Failed to fetch news. Please try again later.';
            console.error('Error fetching data:', error);
        })
        .finally(function() {
            $scope.loading = false;
        });

    // Bookmark an article
    $scope.bookmarkArticle = function(article) {
        const alreadyBookmarked = $scope.bookmarkedArticles.some(function(bookmark) {
            return bookmark.url === article.url;
        });

        if (!alreadyBookmarked) {
            // Add the article to bookmarks
            $scope.bookmarkedArticles.push(article);

            // Save the bookmarks to localStorage
            localStorage.setItem('bookmarkedArticles', JSON.stringify($scope.bookmarkedArticles));
            console.log('Article bookmarked:', article.title);
        } else {
            console.log('Article already bookmarked:', article.title);
        }
    };

    // Remove an article from bookmarks
    $scope.removeBookmark = function(article) {
        const index = $scope.bookmarkedArticles.findIndex(function(bookmark) {
            return bookmark.url === article.url;
        });

        if (index !== -1) {
            // Remove the article from bookmarks
            $scope.bookmarkedArticles.splice(index, 1);

            // Save the updated bookmarks to localStorage
            localStorage.setItem('bookmarkedArticles', JSON.stringify($scope.bookmarkedArticles));
            console.log('Article removed from bookmarks:', article.title);
        }
    };

    // Check if an article is already bookmarked
    $scope.isBookmarked = function(article) {
        return $scope.bookmarkedArticles.some(function(bookmark) {
            return bookmark.url === article.url;
        });
    };
}]);
