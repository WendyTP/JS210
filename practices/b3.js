function nthElementOf(arr, idx) {
  if (idx >= 0 && idx < arr.length) {
    return arr[idx];
  } else {
    return undefined;
  }
}

let digits = [4, 8, 15, 16, 23, 42];
console.log(nthElementOf(digits, 3));
console.log(nthElementOf(digits, 8));
console.log(nthElementOf(digits, -1));