function shift(arr) {
  return arr.splice(0,1)[0];
}

console.log(shift([1, 2, 3]));
console.log(shift([]));
console.log(shift([[1, 2, 3], 4, 5]));
const testArray = [1, 2, 3];
console.log(shift(testArray));
console.log(testArray);