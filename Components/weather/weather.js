app.controller('WeatherController', ['$scope', '$http', function ($scope, $http) {
    // Initialize default values
    $scope.loading = false;
    $scope.error = null;
    $scope.weather = {};

    // Function to search weather by city
    $scope.searchWeather = function () {
        const cityName = document.getElementById('city').value.trim();  // Get the value from the input field

        if (!cityName) {
            $scope.error = 'Please enter a city name';
            return;
        }
        
        $scope.loading = true;  // Show loading state
        $scope.error = null;    // Reset any previous errors
        $scope.weather = {};    // Reset previous weather data

        const apiKey = '8175a36e790ac24d13eed9a6c6419fa2';
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${apiKey}`;

        // Fetch the weather data
        $http.get(apiUrl)
            .then(function (response) {
                const data = response.data;

                if (data.cod === 200) {  // Check if the API call was successful
                    $scope.weather = {
                        location: `${data.name}, ${data.sys.country}`,
                        temperature: data.main.temp,
                        condition: data.weather[0].description,
                        icon: `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`,
                    };
                } else {
                    $scope.error = 'City not found. Please try again with a valid city name.';
                }
            })
            .catch(function (error) {
                $scope.error = 'Unable to fetch weather data. Please check the city name.';
                console.error('Weather API Error:', error);
            })
            .finally(function () {
                $scope.loading = false;  // Hide loading state
            });
    };
}]);
