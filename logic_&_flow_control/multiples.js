/*
requirement:  
  a function that logs the integers from 1 to 100 (inclusive) that are multiples of either 3 or 5
  If the number is divisible by both 3 and 5, append an "!" to the number.
algo:
  iterate through number from 1 to 100,
   if number % 15 === 0, transform number to string and add !, then log
   if number % 3 || % 5 === 0, transform number to string, then log
*/

function multiplesOfThreeAndFive() {
  for (let num = 1; num <= 30; num += 1) {
    if (num % 15 === 0) {
      console.log(String(num) + '!');
    } else if (num % 3 === 0 || num % 5 === 0) {
      console.log(String(num));
    }
  }
}

// multiplesOfThreeAndFive()

function multiOfThreeAndFive(min, max) {
  for (let num = min; num <= max; num += 1) {
    if (num % 15 === 0) {
      console.log(String(num) + '!');
    } else if (num % 3 === 0 || num % 5 === 0) {
      console.log(String(num));
    }
  }
}

multiOfThreeAndFive(1,30)