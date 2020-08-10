/*
requirement:
  A function that iterates over the integers from 1 to 100, inclusive.
  multiples of three, log "Fizz"; multiples of five, log "Buzz";
  numbers which are multiples of both three and five, log "FizzBuzz"
  For all other numbers, log the number.

algo:
  set constants - multiple of 3, 5 and 15
  iterate through 1 to x(num): 
    log FizzBuzz if num % 15 === 0 ; 
    then 3; then 5; then the rest
  */

function fizzBuzz() {
  const MULTIPLE_FIFTEEN = 15;
  const MULTIPLE_FIVE = 5;
  const MULTIPLE_THREE = 3;

  for (let num = 1; num <= 30; num += 1) {
    if (num % MULTIPLE_FIFTEEN === 0) {
      console.log('FizzBuzz');
    } else if (num % MULTIPLE_FIVE === 0) {
      console.log('Buzz');
    } else if (num % MULTIPLE_THREE === 0) {
      console.log('Fizz');
    } else {
      console.log(num);
    }
  }
}

fizzBuzz()