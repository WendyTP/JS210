/*
requirement: 
  a function that takes a string and a number times as arguments. 
  The function should return the string repeated times number of times. If times is not a number, return undefined. 
  If it is a negative number, return undefined also. If times is 0, return an empty string. 
  if time is numbers, assume it's an integer
algo:
excep: 
  times is not number return undefined
  time < 0 , return undefined
  time === 0, return empty string

*/

function repeat(string, times) {
  if (!Number.isInteger(times) || times < 0) {
    return undefined;
  } else if (times === 0) {
    return '';
  } else {
    let repeatedString = '';
    for (let time = 1; time <= times; time += 1) {
      repeatedString += string;
    }
    return repeatedString;
  }
}

console.log(repeat('abc', 1));
console.log(repeat('abc', 2));
console.log(repeat('abc', -1));
console.log(repeat('abc', 0));
console.log(repeat('abc', 'a'));
console.log(repeat('abc', false));
console.log(repeat('abc', null));
console.log(repeat('abc', '  '));