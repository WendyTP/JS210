function push(arr, element) {
  let arrLength = arr.length;
  arr[arrLength] = element;
  return arr.length;
}

let count = [0, 1, 2];
console.log(push(count, 3));         // 4
console.log(count); 