/*
Requirement: a function that takes a positive integer as an argument, 
    and logs all the odd numbers from 1 to the passed in number (inclusive). 
     All numbers should be logged on separate lines.
Exception: 0; negative int;  non-int, non-number => Number.isInteger(arg)
    --> return a message ' non valid input'
Algorithm (assuming input valid):
  from 1 to given number, if number % 2 !== 0, then log this number. Stop iteration
  after the given number.
*/

function ValidPositiveInteger(number) {
  return Number.isInteger(number) && number > 0;
}

function logOddNumbers(number) {
  if (ValidPositiveInteger(number)) {
    for (let i = 1; i <= number; i += 1) {
      if (i % 2 !== 0) {
        console.log(i);
      }
    }
  } else {
    console.log('Invalid input!');
  }
}


logOddNumbers(5)
logOddNumbers(-34)
logOddNumbers(23.45)
logOddNumbers(0)
logOddNumbers(-0)
logOddNumbers(NaN)
logOddNumbers('wer')