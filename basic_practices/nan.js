function isNotANumber(arg) {
  if (typeof(arg) === 'number' && arg.toString() === 'NaN') {
    return true;
  } else {
    return false;
  };
};

console.log(isNotANumber(NaN))
console.log(isNotANumber('NaN'))
console.log(isNotANumber(123))
console.log(isNotANumber(undefined))
console.log(isNotANumber(''))
console.log(isNotANumber(null))
console.log(isNotANumber('q323'))