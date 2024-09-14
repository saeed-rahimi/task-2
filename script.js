' use strict'
///////////////Q1
function calculateArea(length, width) {

    const area = length * width;
    return area;
}
console.log(calculateArea(20, 10));

////////////////////////// Q2


function celsiusToFahrenheit(celsius) {
    const fahrenheit = (celsius * 9 / 5) + 32;
    return fahrenheit
}
console.log(celsiusToFahrenheit(25));

/////////////////////////////////////Q3

function containsValue(arr, value) {
    const index = arr.indexOf(value);
    if (index !== -1) {
        return `The array contains the value ${value} at index ${index}.`;
    } else {
        return `The array does not contain the value ${value}.`;
    }
}
const arr = [10, 20, 25, 30, 40]
const value = 20;
console.log(containsValue(arr, value));