var requestURL = 'https://api.wunderground.com/api/38c97597ddc76b32/conditions/q/MI/Greenville.json';
var weatherObject = new XMLHttpRequest();

weatherObject.open('GET', requestURL, true);
weatherObject.send();
weatherObject.onload = function() {
    var greenvilleWeather = JSON.parse(weatherObject.responseText);
    console.log(greenvilleWeather);
    
    document.getElementById('desc').innerHTML = greenvilleWeather.current_observation.weather;
    document.getElementById('currentTemp').innerHTML = greenvilleWeather.current_observation.temp_f;
    document.getElementById('w_icon').src = greenvilleWeather.current_observation.icon_url;
    document.getElementById('wind').innerHTML = greenvilleWeather.current_observation.wind_mph;
    document.getElementById('forecast').src = greenvilleWeather.current_observation.forecast_url;
    document.getElementById('windchill').innerHTML = greenvilleWeather.current_observation.feelslike_f;
}