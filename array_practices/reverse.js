function reversingArray(arr) {
  let reversedArray = [];
  for (let idx = arr.length - 1; idx >= 0; idx -= 1) {
    reversedArray.push(arr[idx]);
  }

  return reversedArray;
}

let arr = [1,2,3,4,8];

console.log(reversingArray(arr));