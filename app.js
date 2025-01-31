



var app = angular.module('newsUpdatesApp', ['ngRoute','navbar']);

app.config(function ($routeProvider, $locationProvider) {
  
  $locationProvider.html5Mode({
    enabled: true,   
    requireBase: false 
  });

  
  $routeProvider
  .when('/nav', {
    templateUrl: 'newsupdates/Components/nav/nav.html',
    controller: 'navbar',
  })
    .when('/bussinessheadlines', {
      templateUrl: 'newsupdates-dev2/Components/businessheadlines/businessheadlines.html',
      controller: 'NewsController',
    })
    .when('/weather', {
      templateUrl: 'newsupdates-dev2/Components/weather/weather.html',
      controller: 'WeatherController',
  })
  .when('/nav', {
    templateUrl: 'newsupdates-dev2/Components/currentnews/currentnews.html', // Use the component directly in the template
    controller:'CurrentNewsController',
  })
  .when('/sportsnews', {
    templateUrl: 'newsupdates-dev2/Components/sportsnews/sportsnews.html',
    controller: 'sportsController',
  })
  .when('/technology', {
    templateUrl: 'newsupdates-dev2/Components/technologynews/technologynews.html',
    controller: 'TechnologyController', // Technology controller for the new module
  })
  .when('/bookmarks', {
    templateUrl: 'newsupdates-dev2/Components/bookmarks/bookmarks.html',
    controller: 'BookmarksController',
})
.when('/search', {
  templateUrl: 'newsupdates-dev2/Components/searchresult/search.html', // This is where search results will be displayed
  controller: 'SearchController',  // This controller will handle the search logic
})
    // .when('/register', {
    //   templateUrl: 'components/register/register.html',
    //   controller: 'RegisterController',
    // })
    // .when('/home', {
    //   templateUrl: 'components/home/home.html',
    //   controller: 'HomeController',
    // })
    .otherwise({
      redirectTo: '/nav',
    });
});