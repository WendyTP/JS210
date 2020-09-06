function arrayToString(arr) {
  let newString = '';
  for (let idx = 0; idx < arr.length; idx += 1) {
    newString += String(arr[idx]);
  }
  return newString;
}

let array = [1, 'a', 4];
console.log(arrayToString(array));