/*
  requirement: 
    a function that returns a string converted to lowercase.
    To convert a single uppercase character to a lowercase character, get its ASCII numeric representation from the ASCII table, 
    add 32 to that number, then convert the number back to a character using the same ASCII table. 
    You can use the String.fromCharCode and the String.charCodeAt methods 
  
  algo:
  iterate through given string
    check if a letter is a captital letter  (an array of a- z)
    if yes, convert a single letter to lower case, then add to new string
*/

function findLowerCase(letter) {
  let asciiNumeric = letter.charCodeAt(0);
  asciiNumeric += 32;
  return String.fromCharCode(asciiNumeric);
}

function toLowerCase(string) {
  const UPPER_CASE_ALPHABETS = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 
  'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

  let newString = '';
  for (let idx = 0; idx < string.length; idx += 1) {
    if (UPPER_CASE_ALPHABETS.includes(string[idx])) {
      let str = findLowerCase(string[idx]);
      newString += str;
    } else {
      newString += string[idx];
    }
  }

  return newString;
}

console.log(toLowerCase('ALPHABET'));
console.log(toLowerCase('123'));
console.log(toLowerCase('abcDEF'));