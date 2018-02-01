// Fahrenheit to Celcius Conversion Formula
// The temperature T in degrees Celsius (°C) is equal to the temperature T in degrees Fahrenheit (°F) minus 32, times 5/9:


function toCelsius (tempFahrenheit) {
    var celciusTemp = ((tempFahrenheit - 32) * 0.55555555555);
    return celciusTemp;
}


// Celsius to Fahrenheit Conversion Formula
// Multiply the °C temperature by 1.8. Add 32 to this number. This the answer in °F.

function toFahrenheit (tempCelcius) {
    var fahrenheitTemp = (tempCelcius * 1.8) + 32;
    return fahrenheitTemp;
}




// ====================================================================================================================================
// Get a reference to the button element in the DOM
var button = document.getElementById("converter");

// This function should determine which conversion should
// happen based on which radio button is selected.
function determineConverter (clickEvent) {
  console.log("event", clickEvent);
}

// Assign a function to be executed when the button is clicked
button.addEventListener("click", determineConverter);