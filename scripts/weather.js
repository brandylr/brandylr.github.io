var requestURL = 'http://api.wunderground.com/api/38c97597ddc76b32/conditions/q/MI/Greenville.json';
var weatherObject = new XMLHttpRequest();

weatherObject.open('GET', requestURL, true);
weatherObject.send();
weatherObject.onload = function() {
    var franklinWeather = JSON.parse(weatherObject.responseText);
    console.log(franklinWeather);
    
    document.getElementById('place').innerHTML = franklinWeather.current_observation.display_location.full;
    document.getElementById('currentTemp').innerHTML = franklinWeather.current_observation.temp_f;
    document.getElementById('w_icon').src = franklinWeather.current_observation.icon_url;
    
}