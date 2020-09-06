function join(arr, separator) {
  let newStr = '';
  for (let idx = 0; idx < arr.length; idx += 1) {
    newStr += String(arr[idx]);
    
    if (idx !== arr.length - 1) {
      newStr += separator;
    }
  }
  
  return newStr;
}

console.log(join(['bri', 'tru', 'wha'], 'ck '));
console.log(join([1, 2, 3], ' and '));