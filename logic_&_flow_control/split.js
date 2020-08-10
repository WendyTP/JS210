/*
  requirement: a function that takes 2 arguments (a string to be split, a delimiter). Logs the split string to console, one part at a time
               only use string[] and string.length
  algo:
    exception: retrun error message if no delimiter given
    if delimiter is '', iterate string and log one letter at a time
    else
    let newStr = ''
    iterate the string from idx 0:
    (if delimeter and idx === 0, log blank line)
    if non delimeter, add char to newStr;
    if delimter, log newStr
*/

function splitString(string, delimeter) {
  if (delimeter === undefined) {
    console.log('Error: No delimeter');
    return;
  }

  if (delimeter === '') {
    for (let idx = 0; idx < string.length; idx += 1) {
      console.log(string[idx]);
    }
    return;
  } else {
    let splitPart = '';
    for (let idx = 0; idx < string.length; idx += 1) {
      if (string[idx] === delimeter) {
        console.log(splitPart);
        splitPart = '';
      } else {
        splitPart += string[idx];
      }
    }
    if (splitPart) {
      console.log(splitPart);
    }
  }
}


splitString('hello');
splitString('abc,123,hello world', ',');
splitString('hello', '');
splitString(';hello;', ';');
splitString('hello', ';');
