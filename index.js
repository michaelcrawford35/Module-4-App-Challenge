console.log('INFO: Reading index.js');

console.log('INFO: Getting access to elements');

const inputElementDegC = document.getElementById("degC")
const inputElementDegK = document.getElementById("tempK")
const btnElement = document.getElementById("conv");

console.log('INFO: Configuring event handlers');

btnElement.onclick = async function ()
{
  const textC = inputElementDegC.value;
  var Celsius = parseInt(textC);

  var Kelvin = Celsius + 273.15;
  inputElementDegK.innerHTML = "Converted Temperature: " + Kelvin;
}

console.log('INFO: Done loading, waiting for an event'); 