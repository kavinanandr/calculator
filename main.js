"use strict";

/* variable declaration */
const display = document.querySelector("input");

/* appending elements to display */
const appendToDisplay = (input) => {
  display.value += input;
};

/* performing calculations */
const calculate = () => {
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = error.name;
  }
};

/* clearing display */
const clearDisplay = () => {
  display.value = "";
};
