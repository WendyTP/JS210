function unshift(arr, ...values) {
  values.forEach(item => {
    arr.splice(0, 0, item);
  })
  return arr.length;
}

console.log(unshift([1, 2, 3], 5, 6));
console.log(unshift([1, 2, 3]));
console.log(unshift([4, 5], [1, 2, 3]));

const testArray = [1, 2, 3];
console.log(unshift(testArray, 5));
console.log(testArray);