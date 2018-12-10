// SERVICES
weatherApp.service('cityService', function() {
    this.city = 'Ballarat';
});

weatherApp.service('weatherService', ['$resource', function($resource) {
    this.GetWeather = function(city, days) {
        var weatherAPI = $resource("http://api.openweathermap.org/data/2.5/forecast/daily?APPID=c81efb4703a5b8a67e164eb272a8f462", { callback: "JSON_CALLBACK"}, { get: { method: "JSONP" }});
        
        return weatherAPI.get({ q: city, cnt: days })    
    };
}]);

weatherApp.service('weatherServiceFromNodeJS', ['$resource', function($resource) {
    this.GetWeather = function(city, days) {
        var weatherAPI = $resource('http://localhost:3000/weather/' + city + "/" + days);
                        
        return weatherAPI.get();                    
    };
}]);