function slice(array, begin, end) {
  let result = [];
  begin = begin > array.length ? array.length : begin;
  end = end > array.length ? array.length : end; 
  
  for (let idx = begin; idx < end; idx += 1) {
    result.push(array[idx]);
  }

  return result;
}

console.log(slice([1, 2, 3], 1, 2))
console.log(slice([1, 2, 3], 2, 0));
console.log(slice([1, 2, 3], 5, 1));
console.log(slice([1, 2, 3], 0, 5));


const arr1 = [1, 2, 3];
console.log(slice(arr1, 1, 3));
console.log(arr1);