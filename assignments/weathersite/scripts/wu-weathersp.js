var requestURL = 'https://api.wunderground.com/api/38c97597ddc76b32/conditions/q/IL/Springfield.json';
var weatherObject = new XMLHttpRequest();

weatherObject.open('GET', requestURL, true);
weatherObject.send();
weatherObject.onload = function() {
    var springfieldWeather = JSON.parse(weatherObject.responseText);
    console.log(springfieldWeather);
    
    document.getElementById('desc').innerHTML = springfieldWeather.current_observation.weather;
    document.getElementById('currentTemp').innerHTML = springfieldWeather.current_observation.temp_f;
    document.getElementById('w_icon').src = springfieldWeather.current_observation.icon_url;
    document.getElementById('wind').innerHTML = springfieldWeather.current_observation.wind_mph;
    document.getElementById('forecast').src = springfieldWeather.current_observation.forecast_url;
    document.getElementById('windchill').innerHTML = springfieldWeather.current_observation.feelslike_f;
}