function originAndReverse(arr) {
  let result = arr.slice();
  let reversed = arr.slice().reverse();
  result.push(reversed);
  return result.flat();
}

let digits = [4, 8, 15, 16, 23, 42];

console.log(originAndReverse(digits));