// angular.module('newsUpdatesApp')
//   .controller('SportsNewsController', function($scope, $http) {

//     // Initialize title and an empty array for sports news
//     $scope.title = "Sports News";
//     $scope.news = [];

//     // Correct API URL with the key and sports query
//     var apiUrl = 'https://newsdata.io/api/1/news?apikey=pub_65788067b1daa5e22454054362118e453fa53&q=sports';

//     // Fetch data from the API
//     $http.get(apiUrl)
//       .then(function(response) {
//         // Handle success: store the news data in $scope.news
//         $scope.news = response.data.articles || response.data.results || []; // Ensure fallback for missing data
//       })
//       .catch(function(error) {
//         // Handle error
//         console.error("Error fetching sports news:", error);
//         $scope.news = [];  // Show empty array or set an error message
//         $scope.errorMessage = "There was an error fetching the sports news. Please try again later."; // Display error message
//       });

//   });
app.controller('sportsController', function($scope, $http) {
    const url = 'https://sportsdaily.p.rapidapi.com/api/sports/news/?page=1&page_size=30';
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': 'e3cfbd3727msha521ea72ea93088p1923b2jsn345736a1bf7b',
            'x-rapidapi-host': 'sportsdaily.p.rapidapi.com'
        }
    };

    $http.get(url, options).then(function(response) {
        $scope.sportsNews = response.data.results;
    }).catch(function(error) {
        console.error(error);
    });
});

