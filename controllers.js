// CONTROLLER
weatherApp.controller('homeController', ['$scope', '$location', 'cityService', function ($scope, $location, cityService) {
    $scope.city = cityService.city;
     
    $scope.$watch('city', function () {
       cityService.city = $scope.city; 
    });
    
    $scope.submit = function() {
        $location.path('/forecast');
    };
                                          
}]);

weatherApp.controller('forecastController', ['$scope', '$routeParams', 'cityService', 'weatherService', "weatherServiceFromNodeJS", function ($scope, $routeParams, cityService, weatherService, weatherServiceFromNodeJS) {
    
    $scope.city = cityService.city;
    
    $scope.days = $routeParams.days || '2';
                           
    // Using Open Weather Map API
    //$scope.weatherResult = weatherService.GetWeather($scope.city, $scope.days);
    
    // Using custom Node.js Server 
    $scope.weatherResult = weatherServiceFromNodeJS.GetWeather($scope.city, $scope.days);
        
    $scope.convertToCelsius = function(degC) {  
        return degC;
    };
    
    $scope.convertToDate = function(dt) {
        return new Date(dt * 1000);
    }
        
    $scope.$watch('city', function () {
       cityService.city = $scope.city; 
    });
    
    $scope.weatherIcon = function(icon) {
        return "http://openweathermap.org/img/w/" + icon + ".png";
    }
    
}]);
