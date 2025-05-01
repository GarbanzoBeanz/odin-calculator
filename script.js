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