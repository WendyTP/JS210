function shift(arr) {
  if (arr.length === 0) {
    return undefined;
  }

  let first = arr[0];

  for (let idx = 0; idx < arr.length -1; idx += 1) {
    arr[idx] = arr[idx + 1]
  }

  arr.length = arr.length - 1;

  return first;
  
}

let count = [1,2,3];
console.log(shift(count));
console.log(count)