angular.module('newsUpdatesApp')
.controller('BookmarksController', ['$scope', function($scope) {
    // Get bookmarked articles from localStorage
    $scope.bookmarkedArticles = JSON.parse(localStorage.getItem('bookmarkedArticles')) || [];

    // Function to remove a bookmarked article
    $scope.removeBookmark = function(article) {
        const index = $scope.bookmarkedArticles.findIndex(function(bookmark) {
            return bookmark.url === article.url;
        });

        if (index !== -1) {
            // Remove the article from the list
            $scope.bookmarkedArticles.splice(index, 1);

            // Update localStorage
            localStorage.setItem('bookmarkedArticles', JSON.stringify($scope.bookmarkedArticles));
            console.log('Article removed from bookmarks:', article.title);
        }
    };
}]);
