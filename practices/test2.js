function swapEnds(arr) {
  let first = arr[0];
  let last = arr[arr.length - 1];

  arr[0] = last;
  arr[arr.length - 1] = first;
  return arr;
}

let arr1 = [1,2,3,4];
console.log(swapEnds(arr1));
console.log(arr1)