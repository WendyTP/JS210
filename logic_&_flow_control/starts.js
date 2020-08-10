/*
  requirement:
    Implement a function that determines whether a string begins with another string. If it does, the function should return true, or false otherwise.
  algo:
    iterate through the given substring:
      check if the given letter is the same as the letter of the same index of the original string
      if yes, continue checking ; if not return false
    return true after iteration
*/

function startsWith(string, searchString) {
  for (let idx = 0; idx < searchString.length; idx += 1) {
    if (string[idx] !== searchString[idx]) {
      return false;
    }
  }

  return true;
}

let str = 'We put comprehension and mastery above all else';
console.log(startsWith(str, 'We'));              // true
console.log(startsWith(str, 'We put'));          // true
console.log(startsWith(str, ''));                // true
console.log(startsWith(str, 'put'));             // false

let longerString = 'We put comprehension and mastery above all else!';
console.log(startsWith(str, longerString));  