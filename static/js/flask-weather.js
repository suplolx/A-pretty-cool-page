
function parseData(data) {
  currentTemp.innerHTML = `${Math.round(Number(data.currently.temperature))}°C`;
  currentIcon.src = `./static/img/${data.currently.icon}.png`;
  maxTemp.innerHTML = `Max ${Math.round(Number(data.daily.data[0].temperatureMax))}°C | `;
  minTemp.innerHTML = `Min ${Math.round(Number(data.daily.data[0].temperatureMin))}°C`;
  description.innerHTML = data.currently.summary;
  summary.innerHTML = data.hourly.summary;
}

function succes(pos) {
  let lat = pos.coords.latitude;
  let lon = pos.coords.longitude;

  let locations = {
    latitude: lat,
    longitude: lon
  };

  localStorage.setItem('locations', JSON.stringify(locations));

  $.getJSON(`${url}${apiKey}${locations.latitude},${locations.longitude}?callback=??&units=si`,
    parseData)

  getWeather(locations.latitude, locations.longitude);
}

function error(e) {
  console.warn(e.message);
}

function getWeather(lat='51.222665776', lon='5.8749965') {
  console.log(`lat: ${lat} lon: ${lon}`)

  let locations = {
    latitude: lat,
    longitude: lon
  };

  localStorage.setItem('locations', JSON.stringify(locations));

  $.getJSON(`${url}${apiKey}${lat},${lon}?callback=??&units=si`,
    parseData);

  showcase.style.visibility = 'visible';
}

var currentTemp = document.getElementById('current-temp');
var currentIcon = document.getElementById('current-icon');
var maxTemp = document.getElementById('max-temp');
var minTemp = document.getElementById('min-temp');
var description = document.getElementById('description');
var summary = document.getElementById('summary');
var showcase = document.getElementById('showcase-content');
var gpsBtn = document.getElementById('gps-btn');

gpsBtn.addEventListener('click', function() {
  navigator.geolocation.getCurrentPosition(succes, error)});

var apiKey = '07aca4ffd0afb3d09ed1a96c2d305ba4/';
var url = 'https://api.darksky.net/forecast/'

if (localStorage.getItem("locations") === null) {
  console.log("no locations found in localStorage");
  getWeather();
} else {
  console.log("location found in localStorage");
  let locations = JSON.parse(localStorage.getItem("locations"));
  getWeather(locations.latitude, locations.longitude);
}
//navigator.geolocation.getCurrentPosition(succes, error);
//getWeather();
