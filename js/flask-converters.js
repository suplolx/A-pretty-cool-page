var tempOutput = document.getElementById('temp-convert');
var tempInput = document.getElementById('temp-input')
var tempSelect = document.getElementById('select-temp-unit');

var weightOutputLbs = document.getElementById('weight-convert-lbs');
var weightOutputOz = document.getElementById('weight-convert-oz');
var weightInput = document.getElementById('weight-input');
var weightSelect = document.getElementById('select-weight-unit');

var lengthOutput = document.getElementById('length-convert');
var lengthInput = document.getElementById('length-input');
var lengthSelect = document.getElementById('select-length-unit');

tempInput.addEventListener('input', convertTemp);
weightInput.addEventListener('input', convertWeight);
lengthInput.addEventListener('input', convertLength);

tempSelect.addEventListener('change', function() {
  let i = this.selectedIndex;
  let v = this.options[i].value;
  tempInput.name = v;
  tempInput.placeholder = v;
});

lengthSelect.addEventListener('change', function() {
  let i = this.selectedIndex;
  let v = this.options[i].value;
  lengthInput.name = v;
  lengthInput.placeholder = v;
});

weightSelect.addEventListener('change', function() {
  let i = this.selectedIndex;
  let v = this.options[i].value;
  weightInput.name = v;
  weightInput.placeholder = v;
});

// FUNCTIONS BELOW

function convertTemp() {
  var tempValue = tempInput.value;

  if (tempInput.name === 'Celsius') {
    //tempOutput.style.color = "#3d3d3d";
    tempOutput.innerHTML = tempValue * 9 / 5 + 32 + "°F";
  } else {
    //tempOutput.style.color = "#3d3d3d";
    tempOutput.innerHTML = Math.round((tempValue - 32) * 5 / 9) + "°C";
  }
}

function convertWeight() {
  var weightValue = weightInput.value;

  if (weightInput.name === 'Kilogram') {

    weightOutputLbs.innerHTML = parseFloat(weightValue / 0.45359237).toFixed(2) + " lbs";

    weightOutputOz.innerHTML = parseFloat(weightValue / 0.02834952).toFixed(2) + " oz";
  } else if (weightInput.name === 'Pounds') {

      weightOutputLbs.innerHTML = parseFloat(weightValue * 0.45359237).toFixed(2) + " kg";

      weightOutputOz.innerHTML = parseFloat(weightValue * 16).toFixed(2) + " oz";
  } else {

      weightOutputLbs.innerHTML = parseFloat(weightValue / 16).toFixed(2) + " lbs";

      weightOutputOz.innerHTML = parseFloat(weightValue * 0.02834952).toFixed(2) + " kg";
  }
}

function convertLength() {
  var lengthMeter = lengthInput.value;

  if (lengthInput.name === 'Meter') {

    lengthOutput.innerHTML = parseFloat(lengthMeter / 0.3048).toFixed(2) + " ft";
  } else {

      lengthOutput.innerHTML = parseFloat(lengthMeter * 0.3048).toFixed(2) + " m";
  }
}
