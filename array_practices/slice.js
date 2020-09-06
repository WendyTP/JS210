function slice(arr, startIdx, endIdx) {
  let slicedArr = [];
  for (let idx = startIdx; idx < endIdx; idx += 1 ) {
    slicedArr.push(arr[idx]);
  }
  return slicedArr;
}

console.log(slice([1, 2, 3, 4, 5], 0, 2));
console.log(slice(['a', 'b', 'c', 'd', 'e', 'f', 'g'], 1, 3));
