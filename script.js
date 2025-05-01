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
//  if the button is equals then call evaluateFormula()
//  if the button is clear-all (AC) then call resetCalculator()
//  if the button is clear (C) then call deleteLastDigit()
//  if the button is a decimal or parenthesis call addSymbol(value)

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

// === handleOperator ====
// if currentOperator exists AND waitingForSecondOperand is false
//   result = evaluateFormula(currentOperator, firstOperand, Number(displayValue))
//   displayValue = result
//   firstOperand = result
// else 
//   firstOperand = Number(displayValue)

// currentOperator = clicked operator 
// waitingForSecondOperand = true 