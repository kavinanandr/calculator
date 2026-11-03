"use strict"

/* variable declaration */
const display = document.querySelector("input");

/* appending elements to display */
const appendToDisplay = (input) => {
    display.value = display.value + input;
}

/* clearing display */
const clearDisplay = () => {
    display.value = "";
}