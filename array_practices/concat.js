function concat(arr1, arr2) {
  let newArr = [];
  for (let idx = 0; idx < arr1.length; idx += 1) {
    newArr.push(arr1[idx]);
  }
  for (let idx = 0; idx < arr2.length; idx += 1) {
    newArr[idx + arr1.length] = arr2[idx];
  }
  return newArr;
}

console.log(concat([1, 2, 3], [4, 5, 6]))