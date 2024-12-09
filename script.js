// script.js
let displayElement = document.getElementById("display");
let currentInput = ""; // Stores the current input
let resetDisplay = false; // Controls when to reset display

// Appends a value to the display
function append(value) {
  if (resetDisplay) {
    currentInput = ""; // Reset input after an equals operation
    resetDisplay = false;
  }
  if (currentInput === "0" && value !== ".") {
    currentInput = value; // Prevent multiple leading zeros
  } else {
    currentInput += value; // Append new characters
  }
  displayElement.textContent = currentInput;
}

// Clears the entire display
function clearDisplay() {
  currentInput = ""; // Reset input
  displayElement.textContent = "0"; // Default display
}

// Deletes the last character in the current input
function deleteLast() {
  currentInput = currentInput.slice(0, -1); // Remove last character
  displayElement.textContent = currentInput || "0"; // Show "0" if empty
}

// Evaluates the current expression
function calculate() {
  try {
    const result = eval(currentInput); // Safely evaluates the expression
    currentInput = result.toString(); // Convert the result to string
    displayElement.textContent = currentInput;
    resetDisplay = true; // Mark display for reset after calculation
  } catch (error) {
    displayElement.textContent = "Error"; // Show error on invalid input
    currentInput = "";
  }
}
