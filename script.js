const celsiusField = document.querySelector("#celsius1");
const degree = document.querySelector("#degree");
const convert = document.querySelector("#convert");
const temp1 = document.querySelector("#temp-1");

window.addEventListener("load", () => {
    degree.value = "";
    celsiusField.innerHTML = "";
})

convert.addEventListener("click", (e) => {
    e.preventDefault();
    convertToCelsius();
})

function convertToCelsius(){
    let inputValue = degree.value;

    if(temp1.value === "fahrenheit"){
        const fahrenheitToCelsius = (inputValue -32) * (5/9);
        celsiusField.innerHTML = `${fahrenheitToCelsius.toFixed(3)} &deg;
        c`;
    }
    else if(temp1.value === "kelvin"){
         const  kelvinToCelsius = inputValue -273.15;
         celsiusField.innerHTML = `${kelvinToCelsius.toFixed(3)} &deg;
         c`;
    }
}