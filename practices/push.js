function push(arr1, ...values) {
  let StartingIdx = arr1.length;
  values.forEach(value => {
    arr1[StartingIdx] = value;
    StartingIdx += 1;
  })

  return arr1.length;

}

const array2 = [1, 2, 3];
console.log(push(array2, 4, 5, 6))
console.log(array2); 
console.log(push([1, 2], ['a', 'b']));
console.log(push([], 1));
console.log(push([]));