function areArraysEqual(arr1, arr2) {
  let sorteCopydArr1 = arr1.slice().sort();
  let sorteCopydArr2 = arr2.slice().sort();

  if (arr1.length !== arr2.length) {
    return false;
  }

  for (let idx = 0; idx < sorteCopydArr1.length; idx += 1) {
    if (sorteCopydArr1[idx] !== sorteCopydArr2[idx]) {
      return false;
    }
  }
  return true;
}

console.log(areArraysEqual([1, 2, 3], [1, 2, 3]));
console.log(areArraysEqual([1, 2, 3], [3, 2, 1]));
console.log(areArraysEqual(['a', 'b', 'c'], ['b', 'c', 'a']));
console.log(areArraysEqual(['1', 2, 3], [1, 2, 3]));
console.log(areArraysEqual([1, 1, 2, 3], [3, 1, 2, 1]));
console.log(areArraysEqual([1, 2, 3, 4], [1, 1, 2, 3]));
console.log(areArraysEqual([1, 1, 2, 2], [4, 2, 3, 1]));
console.log(areArraysEqual([1, 1, 2], [1, 2, 2]));
console.log(areArraysEqual([1, 1, 1], [1, 1]));
console.log(areArraysEqual([1, 1], [1, 1]));
