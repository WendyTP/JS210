/*
requirement:  a function that returns a substring of a string based on a starting index and length.
    The start argument is the starting index. If negative, treat it as strLength + start where strLength is the length of the string. 
    The length argument is the maximum length of the desired substring. If length exceeds the number of characters available, just use the available characters.
    only use string[idx] or string.length methods
algo:
  assume all 3 args are given and valid (string and numbers)
  start : if positive => start < string.length; if negative => string.length +(start) >= 0  ==> -string.length <= start < string.length
  length: return '' if negative; stop iterate when reaching end of string
  let newString = ''
  if start negative, start = string.length - start
  iterate until reaching string.length or given length
  return newString
*/

function substr(string, start, length) {
  let subString = '';
  if (-(string.length) <= start < string.length && length >= 0) {
    if (start < 0) {
      start = string.length + start;
    }

    for (let idx = start, lengthCount = 1; idx < string.length && lengthCount <= length; idx += 1, lengthCount += 1) {
      subString += string[idx];
    }
  }
  return subString;
}

let string = 'hello world';
// console.log(substr(string, 2, 4))
console.log(substr(string, -3, 2))
//console.log(substr(string, 8, 20))
//console.log(substr(string, 0, -20))
// console.log(substr(string, 0, 0)); 