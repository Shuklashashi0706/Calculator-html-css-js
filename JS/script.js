// get the result input element
const result = document.getElementById('result');

// get all number button elements
const numButtons = document.querySelectorAll('.keypad .btn:not(.operation .btn)');//here,it selects all the buttons from keypad and :not is used to exclude operation btn

// get all operation button elements
const operationButtons = document.querySelectorAll('.operation .btn:not(#equals)');

// add click event listeners to number buttons
numButtons.forEach(button => {
  button.addEventListener('click', () => {
    if (button.id === 'clear') {
      // Clear the screen
      result.value = '';
    }
    else {
      result.value += button.value;
    }
  });
});

// add click event listeners to operation buttons
operationButtons.forEach(button => {
  button.addEventListener('click', () => {
    result.value += ' ' + button.value + ' ';
  });
});

// add click event listener to equals button
document.getElementById('equals').addEventListener('click', () => {
  // evaluate the expression in the result input
  try {
    result.value = eval(result.value);
  } catch (error) {
    result.value = 'Error';
  }
});
