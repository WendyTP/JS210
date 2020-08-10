

function getNumber(prompt) {
  let rlSync = require('readline-sync');
  return Number(rlSync.question(prompt));
}

function multiply(num1, num2) {
  return num1 * num2;
}

let firstNumber = getNumber('Enter the first number: ');
let secondNumber = getNumber('Enter the second number: ');
console.log(firstNumber + '*' + secondNumber + '= ' + multiply(firstNumber, secondNumber));