// Fahrenheit to Celcius
function toCelsius (tempFahrenheit) {
    var celciusTemp = ((tempFahrenheit - 32) * 0.55555555555);
    return celciusTemp;
}

// Celsius to Fahrenheit
function toFahrenheit (tempCelcius) {
    var fahrenheitTemp = (tempCelcius * 1.8) + 32;
    return fahrenheitTemp;
}

// Get a reference to the button element in the DOM
var buttonConvert = document.getElementById("converter");
var buttonClear = document.getElementById("clearer");

// This function should determine which conversion should
// happen based on which radio button is selected.
function determineConverter() {
    let userTempInput = document.getElementById("value").value;
    let fahrenheitRadioButton = document.getElementById("toFahrenheit");
    let celciusRadioButton = document.getElementById("toCelcius");

    if (celciusRadioButton.checked) {
        var celciusResult = toCelsius(userTempInput);


        if(celciusResult > 32) {
            console.log("hot");
            document.getElementById("results").classList.add("hot");
            document.getElementById("results").innerHTML = `${celciusResult}° Celcius`
        }
        else if(celciusResult < 0) {
            console.log("cold");
            document.getElementById("results").classList.add("cold");
            document.getElementById("results").innerHTML = `${celciusResult}° Celcius`

        }
        else {
            document.getElementById("results").innerHTML = `${celciusResult}° Celcius`
        }

        
        // document.getElementById("results").innerHTML = `${celciusResult}° Celcius`
    }
    else if (fahrenheitRadioButton.checked) {
        var fahrenheitResult = toFahrenheit(userTempInput);

        if(fahrenheitResult > 90) {
            console.log("hot");
            document.getElementById("results").classList.add("hot");
            document.getElementById("results").innerHTML = `${fahrenheitResult}° Fahrenheit`
        }
        else if(fahrenheitResult < 32) {
            console.log("cold");
            document.getElementById("results").classList.add("cold");
            document.getElementById("results").innerHTML = `${fahrenheitResult}° Fahrenheit`

        }
        else {
            document.getElementById("results").innerHTML = `${fahrenheitResult}° Fahrenheit`
        }










        // document.getElementById("results").innerHTML = `${fahrenheitResult}° Fahrenheit`

    }
}

function clearField() {
    document.getElementById("tempForm").reset();
}

function enterKeySubmit(e) {
    if (e.keyCode === 13) {
        determineConverter();
        document.getElementById("results").classList.add("");
    }
}

// Assign a function to be executed when the button is clicked
// buttonConvert.addEventListener("keypress", determineConverter);

document.addEventListener('keypress', enterKeySubmit); 
buttonConvert.addEventListener("click", determineConverter);
buttonClear.addEventListener("click", clearField);