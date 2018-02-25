
var tempF = 90 /*parseFloat(document.getElementById(90).value);*/
var speed = 5 /*parseFloat(document.getElementById(5).value);*/
windChill(tempF, speed);
var chill = windChill(tempF, speed);
document.getElementById("windchill").innerHTML = chill;

function windChill(tempF, speed) {
var factor = 35.74 + 0.6215 * tempF - 35.75 * Math.pow(speed, 0.16) + 
0.4275 * tempF * Math.pow(speed, 0.16);
var digits = 2;
var multiplier = Math.pow(10, digits);
factor = Math.round(factor * multiplier) / multiplier;
return factor;
}