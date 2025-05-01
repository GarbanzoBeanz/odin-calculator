'use strict';
// ==== Initialize ==== //
// displayValue = 0
// firstOperand is empty
// secondOperand is empty
// waitingForSecondOperand is false

// ==== Event Listeners ==== //
// for each button:
//  if the button is a number then call handleNumInput(value)
//  if button is an operator then call handleOperator(operator)
//  if the button is equals then call handleEquals()
//  if the button is clear-all (AC) then call resetCalculator()
//  if the button is clear (C) then call deleteLastDigit()
//  if the button is a decimal addSymbol(value)

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
//    displayValue = result
//  
//  firstOperand = result
//  currentOperator = null
//  waitingForSecondOperand = true
//  updateDisplay ()

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