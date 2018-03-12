var requestURL = 'http://api.wunderground.com/api/38c97597ddc76b32/conditions/q/MN/Franklin.json';
var weatherObject = new XMLHttpRequest();

weatherObject.open('GET', requestURL, true);
weatherObject.send();
weatherObject.onload = function() {
    var franklinWeather = JSON.parse(weatherObject.responseText);
    console.log(weatherInfo);
    
    document.getElementById('desc').innerHTML = franklinWeather.current_observation.weather;
    document.getElementById('currentTemp').innerHTML = franklinWeather.current_observation.temp_f;
    document.getElementById('w_icon').src = franklinWeather.current_observation.icon_url;
    document.getElementById('wind').innerHTML = franklinWeather.current_observation.wind_mph;
    document.getElementById('forecast').src = franklinWeather.current_observation.forecast_url;
}