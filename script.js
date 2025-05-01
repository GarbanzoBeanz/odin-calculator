'use strict';
// ==== Initialize ==== //
let displayValue = 0;
let firstOperand = null;
let secondOperand = null;
let currentOperator = null;
let waitingForSecondOperand = false;

// ==== Query Selectors ==== //

const DOM = {
  display: document.querySelector('.display-content'),
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
      handleOperator(operator);
    }
  })
})
// ==== handleNumInput ==== //
// if waitingForSecondOperand is true
//  displayValue = clickedNumber
//  waitingForSecondOperand = false
// else
//    if displayValue is 0
//      displayValue = 0
//    else
//      append clicked number to displayValue
// update the display

// ==== handleOperator ==== //
// if currentOperator exists AND waitingForSecondOperand is false
//   handleEquals()
//
//  firstOperand = Number(displayValue)
//  currentOperator = operator
//  waitingForSecondOperand = true


// ====  handleEquals ==== //
// called when equals is clicked
//  if currentOperator is null OR waitingforSecondOperand
//    return (do nothing)
//
//  secondOperand = Number(displayValue)
//  result = operator(currentOperator, firstOperand, secondOperand)
//
//  if result is "ERROR"
//    displayValue = "SyntaxError"
//  else
//    displayValue = formatResult(result)
//  
//  firstOperand = result
//  currentOperator = null
//  waitingForSecondOperand = true
//  updateDisplay()

// ==== operator functions ==== //
// logic that adds (return a + b)
// logic that subtracts (return a - b)
// logic that multiplies (return a * b)
// logic that divides (if b===0 return error else return a/b)

// logic that returns the operation
//  if operate = + return adds logic
//  else if operate = - return subtracts logic
//  else if operate = * return multiplies logic
//  else if operate = / return divides logic

// ==== Display logic ==== //
// updateDisplay()
//    change display element's text content to displayValue
//
// formatResult(number)
//    if number has more than X decimals,
//      return rounded version,
//    else return number

// ==== Clear & Clear All ==== //
// clear-all (full reset)
// handleClearAll()
//  displayValue = 0
//  firstOperand is empty
//  secondOperand is empty
//  currentOperator is empty
//  waitingForSecondOperand is false
//  updateDisplay

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