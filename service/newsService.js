angular.module('newsUpdatesApp')
.factory('NewsService', function ($http) {
    var API_KEY = '64db235de0d14b1e991f120f04fc9d14';  // Use your own API key from NewsAPI

    return {
        searchNews: function (query) {
            var url = `https://newsapi.org/v2/everything?q=${query}&apiKey=${API_KEY}`;
            return $http.get(url);  // Fetch data from the API
        }
    };
});
