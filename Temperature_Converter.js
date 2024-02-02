function convertTemperature() {
    var temperature = parseFloat(document.getElementById("temperature").value);
    var unit = document.getElementById("unit").value;
    var resultElement = document.getElementById("result");

    if (isNaN(temperature)) {
        resultElement.innerHTML = "Please enter a valid temperature.";
        return;
    }

    var convertedTemperatures = "";

    switch (unit) {
        case "celsius":
            convertedTemperatures += temperature + "°C is " + (temperature * 9/5 + 32).toFixed(2) + "°F and " + (temperature + 273.15).toFixed(2) + "K";
            break;
        case "fahrenheit":
            convertedTemperatures += temperature + "°F is " + ((temperature - 32) * 5/9).toFixed(2) + "°C and " + ((temperature - 32) * 5/9 + 273.15).toFixed(2) + "K";
            break;
        case "kelvin":
            convertedTemperatures += temperature + "K is " + (temperature - 273.15).toFixed(2) + "°C and " + ((temperature - 273.15) * 9/5 + 32).toFixed(2) + "°F";
            break;
        default:
            break;
    }

    resultElement.innerHTML = convertedTemperatures;
}