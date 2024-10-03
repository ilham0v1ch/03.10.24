'use strict'

let count = 0;

const countDisplay = document.getElementById('count');
const decrementButton = document.getElementById('decrement');
const resetButton = document.getElementById('reset');
const incrementButton = document.getElementById('increment');

decrementButton.addEventListener('click', () => {
  count--;
  updateDisplay();
});

resetButton.addEventListener('click', () => {
  count = 0;
  updateDisplay();
});

incrementButton.addEventListener('click', () => {
  count++;
  updateDisplay();
});

function updateDisplay() {
  countDisplay.textContent = count;
}