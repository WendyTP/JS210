function isNegativeZero(number) {
  let testNum = 1
  return testNum / number === -Infinity;
};

console.log(isNegativeZero(-0))
console.log(isNegativeZero(0))
console.log(isNegativeZero(43))
console.log(isNegativeZero(-43))