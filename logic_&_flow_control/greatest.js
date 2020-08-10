/*
requirement: a function that computes the Greatest Common Divisor of two positive integers.
algo:
  - compute the divisors of an integer:
      set an empty array
      iterate from 1 to integer
      if a number can divide the integer, push into the array
  - compute the divisors of another integer;
  - iterate through one of arrray from last element:
    if finds same element in another array, return element and stop iteration

*/

function findDivisors(number) {
  let divisors = [];
  for (let divisor = 1; divisor <= number; divisor +=1) {
    if (number % divisor === 0) {
      divisors.push(divisor);
    }
  }
  return divisors;
}

function gcd(number1, number2) {
  let divisorsForNumber1 = findDivisors(number1);
  let divisorsForNumber2 = findDivisors(number2);
  let greatestCommonDivisor;
  

  for (let index = divisorsForNumber1.length -1; index >= 0; index -= 1) {
    if (divisorsForNumber2.includes(divisorsForNumber1[index])) {
      
      greatestCommonDivisor = divisorsForNumber1[index];
      break;
    }
  }
  return greatestCommonDivisor;
}

console.log(gcd(12,4));
console.log(gcd(15,10));
console.log(gcd(9,2));


/* 
another way - Euclid's algorithm
function gcdd(num1, num2) {
  var temp;

  while (num2 !== 0) {
    temp = num2;
    num2 = num1 % num2;
    num1 = temp;
  }

  return num1;
}
*/

