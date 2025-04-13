const display = document.getElementById('display');
const buttons = document.querySelectorAll('.btn');
const clearBtn = document.getElementById('clear');
const equalsBtn = document.getElementById('equals');

let currentInput = '';

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const value = button.textContent;

    if (value === '=') {
      try {
        currentInput = eval(currentInput).toString();
        display.value = currentInput;
      } catch (err) {
        display.value = 'Error';
        currentInput = '';
      }
    } else if (value === 'C') {
      currentInput = '';
      display.value = '';
    } else {
      currentInput += value;
      display.value = currentInput;
    }
  });
});

// Clear button functionality
clearBtn.addEventListener('click', () => {
  currentInput = '';
  display.value = '';
});
