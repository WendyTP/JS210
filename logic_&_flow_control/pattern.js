/*
requirement: 
    a function that takes a number of rows as the argument nStars and logs a square of numbers and asterisks. 
    assume that nStars is greater than 1 and less than 10.
algo:
  const aster = *
  iterate from 1 to num:
    when 1: log 1 and (num - 1) * aster
    when 2: log 1 2 and (num -2) * aster

*/

function logNumbers(number) {
  let numbersInString = '';
  for (let count = 1; count <= number; count += 1) {
    numbersInString = numbersInString + String(count);
  }

  return numbersInString
}

function logAsterisks(number) {
  const ASTERISKS = '*';
  let asterisks = '';
  for (let count = 1; count <= number; count += 1) {
    asterisks = asterisks + ASTERISKS;
  }

  return asterisks
}

function generatePattern(nStars) {
  for (let count = 1; count <= nStars; count += 1) {
    console.log(`${logNumbers(count)}${logAsterisks(nStars - count)}`)
  }
}

generatePattern(9)

