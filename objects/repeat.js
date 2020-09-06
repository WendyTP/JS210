/*
requirement: a function takes a string, and returns an object containing a count of repeated character. If no repeated char., it returns an empty object.
  - case insensitve
  - only return counts of 2 or more repeats
algo:
  - create a count object {}
  - create a repeat object {}
  - iterate through each char of string, add char to count object and its count
  - iterate through count object, if a property value is > 1, add the pair to repeat 
  - return repeat object
*/

/* first try
function repeatedCharacters(str) {
  let lowerCasedStr = str.toLowerCase();
  let countResult = {};
  let repeatResult = {};
  
  for (let idx = 0; idx < lowerCasedStr.length; idx += 1) {
    if (Object.keys(countResult).indexOf(lowerCasedStr[idx]) === -1) {
      countResult[lowerCasedStr[idx]] = 0;
    }
      countResult[lowerCasedStr[idx]] += 1;
  }

  for (let char in countResult) {
    if (countResult[char] > 1) {
      repeatResult[char] = countResult[char];
    }
  }

  return repeatResult;
}
*/

function repeatedCharacters(str) {
  let lowerCasedStr = str.toLowerCase();
  let countResult = {};

  for (let idx = 0; idx < lowerCasedStr.length; idx += 1) {
    if (Object.keys(countResult).indexOf(lowerCasedStr[idx]) === -1) {
      countResult[lowerCasedStr[idx]] = 0;
    }
      countResult[lowerCasedStr[idx]] += 1;
  }

  for (let key in countResult) {
    if (countResult[key] === 1) {
      delete countResult[key];
    }
  }

  return countResult;
}


console.log(repeatedCharacters('Programming'));
console.log(repeatedCharacters('Combination'));
console.log(repeatedCharacters('Pet'));
console.log(repeatedCharacters('PAPER'));
console.log(repeatedCharacters('Baseless'));