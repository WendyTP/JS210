function lastNOf(arr, count) {
  return arr.slice(-count);
}

let digits = [4, 8, 15, 16, 23, 42];
console.log(lastNOf(digits, 3));
console.log(lastNOf(digits, 7))