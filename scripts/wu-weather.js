var requestURL = 'http://api.wunderground.com/api/38c97597ddc76b32/conditions/q/MN/Franklin.json';
var weatherObject = new XMLHttpRequest();

weatherObject.open('GET', requestURL, true);
weatherObject.send();
weatherObject.onload = function() {
    var weatherInfo = JSON.parse(weatherObject.responseText);
    console.log(weatherInfo);
}