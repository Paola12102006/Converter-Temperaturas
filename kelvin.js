function ConverterC_F() {

    var celsius = document.getElementById("celsius");

    var tempCelsius = parseInt(document.getElementById("temperatura_celsius").value);
    
    var tempFahrenheit = (tempCelsius * 1.8) + 32;

    celsius.innerHTML = "Essa temperatura é em Fahrenheit: " + tempFahrenheit;

}

function ConverterC_K() {

    var celsius = document.getElementById("celsius");

    var tempCelsius = parseInt(document.getElementById("temperatura_celsius").value);

    var tempKelvin = tempCelsius + 273.15;

    celsius.innerHTML = "Essa temperatura é em Kelvin: " + tempKelvin;
}

function ConverterF_C() {

    var fahrenheit = document.getElementById("fahrenheit");

    var tempFahrenheit = parseInt(document.getElementById("temperatura_fahrenheit").value);

    var tempCelsius = (tempFahrenheit - 32) / 1.8;

    var resultadoFinal = tempCelsius.toFixed(1);

    fahrenheit.innerHTML = "Essa temperatura é em Celsius: " + resultadoFinal;
}

function ConverterF_K() {

    var fahrenheit = document.getElementById("fahrenheit");

    var tempFahrenheit = parseInt(document.getElementById("temperatura_fahrenheit").value);

    var tempKelvin = (tempFahrenheit + 459.67) / 1.8;

    var resultadoFinal = tempKelvin.toFixed(2);

    fahrenheit.innerHTML = "Essa temperatura é em Kelvin: " + resultadoFinal;
}

function ConverterK_C() {

    var kelvin = document.getElementById("kelvin");

    var tempKelvin = parseInt(document.getElementById("temperatura_kelvin").value);

    var tempCelsius = tempKelvin - 273.15;

    var resultadoFinal = tempCelsius.toFixed(2);

    kelvin.innerHTML = "Essa temperatura é em Celsius: " + resultadoFinal;
}

function ConverterK_F() {
    
    var kelvin = document.getElementById("kelvin");

    var tempKelvin = parseInt(document.getElementById("temperatura_kelvin").value);

    var tempFahrenheit = (tempKelvin - 273.15) * 1.8 + 32;

    var resultadoFinal = tempFahrenheit.toFixed(2);

    kelvin.innerHTML = "Essa temperatura é em Fahrenheit: " + resultadoFinal;
}