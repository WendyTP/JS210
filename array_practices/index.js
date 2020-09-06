function indexOf(arr, element) {
  for (let idx = 0; idx < arr.length; idx += 1) {
    if (element === arr[idx]) {
      return idx;
    }
  }
  return -1;
}

console.log(indexOf([1, 2, 3, 3], 3))
console.log(indexOf([1, 2, 3], 4))
console.log(indexOf([1,[4,5]], [4,5]));