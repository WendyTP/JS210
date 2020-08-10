/*
requirement: 
  a function that takes 1 argument. logs all multiples of the arg 
  from 0 and 100 (inclusive) that are odd numbers. Log in descending order.
  assume argument is an integer between 0 and 100
algo:
  create an array  []
  while current number <= 100, and number is odd, add chosen numbers to array
  iterate the array, log number
  */

function logMultiples(number) {
  let multiples = [];
  
  if (number % 2 !== 0) {
    for (let multiple = 1; number * multiple <= 100; multiple += 2) {
      multiples.unshift(number * multiple);
    }

    multiples.forEach(function(num) {
      console.log(num);
    });
  }
}

logMultiples(17)
logMultiples(22)
logMultiples(21)