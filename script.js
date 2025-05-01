'use strict';
// ==== Initialize ==== //
let displayValue = 0;
let firstOperand = null;
let secondOperand = null;
let currentOperator = null;
let waitingForSecondOperand = false;
let historyValue = '';

const operatorSymbols = {
  plus: "+",
  minus: "−",
  multiply: "×",
  divide: "÷",
  percent: "%",
};

// ==== Query Selectors ==== //

const DOM = {
  display: document.querySelector('.display-content'),
  history: document.querySelector('.display-history'),
  buttons: document.querySelectorAll('button'),

  number: document.querySelectorAll('button[data-number]'),
  operator: document.querySelectorAll('button[data-operator]'),
  symbol: document.querySelector('button[data-symbol]'),

  equals: document.querySelector('button[data-operator="equals"]'),
  clear: document.querySelector('button[data-operator="clear"]'),
  clearAll: document.querySelector('button[data-operator="clear-all"]'),
  backspace: document.querySelector('button[data-operator="backspace"]'),

  decimal: document.querySelector('button[data-symbol="decimal-point"]'),
};

// ==== Event Listeners ==== //
DOM.buttons.forEach(button => {
  button.addEventListener('click' , event => {
    const btn = event.target;

    if(btn.dataset.number !== undefined) {
      handleNumberInput(btn.dataset.number);
    
    }else if(btn.dataset.operator === 'equals') {
      handleEquals();

    }else if(btn.dataset.operator === 'clear-all') {
      handleClearAll();

    }else if(btn.dataset.operator === 'clear') {
      handleBackspace();

    }else if(btn.dataset.symbol === 'decimal-point') {
      handleDecimal();

    }else if(btn.dataset.operator !== undefined){ //had to move this to the end
      handleOperator(btn.dataset.operator);
    };
  });
});

// ==== Calculator Logic ==== //
function handleNumberInput(clickedNumber) {
  if(waitingForSecondOperand) { //starting fresh if operator has just been selected
    displayValue = clickedNumber;;
    waitingForSecondOperand = false;
    historyValue += ' ' + clickedNumber;
  
  }else {
    if(displayValue ===  0) {
      displayValue = clickedNumber;
      historyValue = clickedNumber;
    } else {
      displayValue += clickedNumber;
      historyValue += clickedNumber;
    };
  };

  updateHistory()
  updateDisplay();
};

function handleOperator(operator) {
  if(currentOperator && !waitingForSecondOperand) {
    handleEquals()
  };

  firstOperand = Number(displayValue);
  currentOperator = operator;
  waitingForSecondOperand = true;
  historyValue = `${firstOperand} ${operatorSymbols[operator]}`
  updateHistory(); 
};

function handleEquals() {
  if (!currentOperator || waitingForSecondOperand) {
    return
  };

  secondOperand = Number(displayValue);
  let result = operate(currentOperator, firstOperand, secondOperand);

  if(result === 'ERROR') {
    displayValue = 'SyntaxError';
  } else {
    displayValue = formatResult(result);
  };

  historyValue = `${firstOperand} ${operatorSymbols[currentOperator]} 
  ${secondOperand} = ${result}`
  updateHistory(); 

  firstOperand = result;
  currentOperator = null;
  waitingForSecondOperand = true;
  historyValue = '';

  updateDisplay();
};

function handleClearAll() {
  displayValue = 0;
  firstOperand = null;
  secondOperand = null;
  currentOperator = null;
  waitingForSecondOperand = false;
  historyValue = 'History';

  updateHistory();
  updateDisplay();
};

function handleBackspace() {
  if (displayValue.length > 1) {
    displayValue = displayValue.slice(0, -1);
    historyValue = historyValue.slice(0, -1);
  } else {
    displayValue = '0';
    historyValue = '0';
  }
  updateHistory();
  updateDisplay();
}
// ==== Operator Logic ==== //
const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => {
  if(b === 0) {
    return 'ERROR';
  } else {
    return a/b;
  };
};

function operate(operator, a, b) {
  switch(operator) {
    case 'plus': 
      return add(a, b)
    break;
      
    case 'minus': 
      return subtract(a, b)
    break;

    case 'multiply': 
      return multiply(a, b)
    break;

    case 'divide': 
      return divide(a, b)
    break;
  };
};

// ==== Display Logic ==== //
function updateDisplay() {
  DOM.display.textContent = displayValue;
};

function updateHistory() {
  DOM.history.textContent = historyValue;
};


// ==== Utility Logic ==== //
function hasMoreThanTwoDecimals(num) {
  const numberString = num.toString();
  if (numberString.indexOf('.') === -1) {
    return false;
  }
  const decimals = numberString.split('.')[1];
  return decimals.length > 2;
};

function formatResult(num) {
  if(hasMoreThanTwoDecimals(num)) {
    return parseFloat(num).toFixed(2);
  } else {
    return num;
  };
};

// ==== Clear & Clear All ==== //


// handleBackspace()
//  if displayValue length > 1
//    remove last char
//  else displayValue = 0
//  updateDisplay

// ==== handleDecimal ==== //
// if waitingForSecondOperand is true
//    displayValue = 0
//    waitingForSecondOperand = false
//    updateDisplay
//    return
//
//  if displayValue does not include '.' then
//    append . to displayValue
//    updateDisplay

// ==== keyboard support ==== //
// onkeydown:
// if key is number, call handleNumberInputs
// if key is operator, call handleOperator
// if key is enter or =, call handleEquals
// if key is backspace: call handleBackspace
// if key is escape call handleClear
// if key is . call handleDecimal