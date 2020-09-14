function pop(arr) {
  let poppedItem = arr[arr.length - 1];
  let currentLength = arr.length;
  arr.splice(arr.length - 1);
  return poppedItem;
}


const array1 = [1, 2, 3];
console.log(pop(array1));
console.log(array1);  
console.log(pop([]));
console.log(pop([1, 2, ['a', 'b', 'c']]));