//callback function for navigator.geolocation.getCurrentPosition() method
//https://developer.mozilla.org/en-US/docs/Web/API/Geolocation/getCurrentPosition
function succes(pos) {
  let lat = pos.coords.latitude;
  let lon = pos.coords.longitude;

  let locations = {
    latitude: lat,
    longitude: lon
  };

  localStorage.setItem('locations', JSON.stringify(locations));
  console.log('new location set based on device location');
  console.log(`lat: ${locations.latitude} lon: ${locations.longitude}`);
  getWeather(locations.latitude, locations.longitude);
}


//callback function for navigator.geolocation.getCurrentPosition() method
//https://developer.mozilla.org/en-US/docs/Web/API/Geolocation/getCurrentPosition
function error(e) {
  console.warn(e.message);
}


//AJAX function to send coords to server and get JSON weather object back
function getWeather(lat, lon) {
  let url = 'http://192.168.2.4:5000/getmethod/'
  let weatherRequest = new XMLHttpRequest();
  weatherRequest.open("GET", `${url}${lat},${lon}`);

  //anonymous function to parse the JSON data returned from server.
  //Use the data to generate weather report in HTML elements
  weatherRequest.onload = function() {
    let data = JSON.parse(weatherRequest.responseText);
    currentTemp.innerHTML = `${Math.round(Number(data.currently.temperature))}°C`;
    currentIcon.src = `./static/img/${data.currently.icon}.png`;
    maxTemp.innerHTML = `Max ${Math.round(Number(data.daily.data[0].temperatureMax))}°C | `;
    minTemp.innerHTML = `Min ${Math.round(Number(data.daily.data[0].temperatureMin))}°C`;
    description.innerHTML = data.currently.summary;
    summary.innerHTML = data.hourly.summary;

    let weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

    for (let i = 1; i <= 5; i++) {

      let ts = new Date(Number(data.daily.data[i].time * 1000)).getDay();
      let cellHeader = document.createElement("th");
      let cellHeaderText = document.createTextNode(weekDays[ts]);

      cellHeader.appendChild(cellHeaderText);
      headerRow.appendChild(cellHeader);

      let cell = document.createElement("td");
      let cellImage = document.createElement('IMG');

      cellImage.setAttribute("src", `./static/img/${data.daily.data[i].icon}.png`);

      cell.appendChild(cellImage);
      iconRow.appendChild(cell);


      let cellMax = document.createElement("td");
  		let cellMaxText = document.createTextNode(Math.round(Number(data.daily.data[i].temperatureMax)) + "°C");

  		cellMax.appendChild(cellMaxText);
  		maxTempRow.appendChild(cellMax);

      let cellMin = document.createElement("td");
  		let cellMinText = document.createTextNode(Math.round(Number(data.daily.data[i].temperatureMin)) + "°C") ;

  		cellMin.appendChild(cellMinText);
  		minTempRow.appendChild(cellMin);
    }

  };

  weatherRequest.send();
}

/*
  ======================
  ==SCRIPT STARTS HERE==
  ======================
*/

//selecting HTML elements
var currentTemp = document.getElementById('current-temp');
var currentIcon = document.getElementById('current-icon');
var maxTemp = document.getElementById('max-temp');
var minTemp = document.getElementById('min-temp');
var description = document.getElementById('description');
var summary = document.getElementById('summary');
//var gpsBtn = document.getElementById('gps-btn');
var headerRow = document.getElementById('header-row');
var iconRow = document.getElementById('icon-row');
var maxTempRow = document.getElementById('max-temp-row');
var minTempRow = document.getElementById('min-temp-row');


/*
//event listener for GPS button to get current location from device
gpsBtn.addEventListener('click', function() {
  navigator.geolocation.getCurrentPosition(succes, error)});
*/

//checking if location is already stored in local storage of the device
if (localStorage.getItem("locations") === null) {
  console.log('no location found in local storage');

  let locations = {
    latitude: '51.222665776',
    longitude: '5.8749965'
  };
  //setting default location in local storage of device
  localStorage.setItem('locations', JSON.stringify(locations));
  getWeather(locations.latitude, locations.longitude);
  console.log(`new location set lat: ${locations.latitude}. lon: ${locations.longitude}`);

} else {
  //retreive location from local storage if it has already been stored
  console.log('location found in local storage')
  let locations = JSON.parse(localStorage.getItem("locations"));
  console.log(`lat: ${locations.latitude} lon: ${locations.longitude}`);
  getWeather(locations.latitude, locations.longitude);
}
