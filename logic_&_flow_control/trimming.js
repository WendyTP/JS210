/*
requirement:
Write a function that takes a string as an argument, and returns the string stripped of spaces from both ends. 
Do not remove or alter internal spaces.
algo:
only use string[] or string.length methods
algo:
  return string if length === 0;
  let newstring = ''
  let firstCharIndex;
  iterate string, firstCharIndex = index when it's not a space
  let lastCharIndex;
  iterate string from the end, lastCharIndex = index when it's not a space

  '  abc  ' (length 7) (firstIdx = 2) (lastIdx = 4)
  if (firstIdx && lastIdx)
    iterate string from firstIdx to lastIdx, push chara to newstring
*/

function trim(string) {
  let newString = '';
  let firstCharIdx;   // undefined (even for empty string or all space string)
  
  for (let idx = 0; idx < string.length; idx += 1) {
    if (string[idx] !== ' ') {
      firstCharIdx = idx;
      break;
    }
  }

  
  if (typeof firstCharIdx !== 'number') {
    return newString;
  }

  let lastCharIdx;

  for (let idx = string.length - 1; idx >= 0; idx -= 1) {
    if (string[idx] !== ' ') {
      lastCharIdx = idx;
      break;
    }
  }

  for (let idx = firstCharIdx; idx <= lastCharIdx; idx += 1) {
    newString += string[idx];
  }

  return newString;
}

console.log(trim('  abc  '))
console.log(trim('abc  '))
console.log(trim('  a'))
console.log(trim('c  '))
console.log(trim('     '))
console.log(trim(''))

