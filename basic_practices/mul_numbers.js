let rlSync = require('readline-sync');
let num1 = rlSync.question('Enter the first number:');
let num2 = rlSync.question('Enter the second number:');

let sum = Number(num1) * Number(num2);

console.log(`The sum is ${sum}.`);