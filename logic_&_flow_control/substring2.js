/*
requirement:
  If both start and end are positive integers, start is less than end, and both are within the boundary of the string, return the substring from the start index (inclusive), to the end index (NOT inclusive).
If the value of start is greater than end, swap the values of the two, then return the substring as described above.
If start is equal to end, return an empty string.
If end is omitted, the end variable inside the function isundefined. Return the substring starting at position start up through (and including) the end of the string.
If either start or end is less than 0 or NaN, treat it as 0.
If either start or end is greater than the length of the string, treat it as equal to the string length.
*/

function substring(string, start, end) {
  let newString = '';

  if (end === undefined) {
    end = string.length;
  }

  if (start < 0 || Number.isNaN(start) || !Number.isInteger(start)) {
    start = 0;
  }

  if (end < 0 || Number.isNaN(end) || !Number.isInteger(end)) {
    end = 0;
  }

  if (start > end) {
    [start, end] = [end, start];
  }


  if (start > string.length) {
    start = string.length;
  }

  if (end > string.length) {
    end = string.length;
  }

  for (let idx = start; idx < end; idx += 1) {
    newString += string[idx];
  }

  return newString;
}


let string = 'hello world';
console.log(substring(string, 2, 4));
console.log(substring(string, 4, 2));
console.log(substring(string, 0, -1));
console.log(substring(string, 2));
console.log(substring(string, 'a'));
console.log(substring(string, 8, 20));
