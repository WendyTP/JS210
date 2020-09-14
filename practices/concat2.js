function concat(arr1, ...values) {
  let result = arr1.slice();
  values.forEach((value) => {
    if (Array.isArray(value)) {
      value.forEach((item) => result.push(item));
    } else {
      result.push(value);
    }
  })
  return result;
}

console.log(concat([1, 2, 3], [4, 5, 6], [7, 8, 9]));
console.log(concat([1, 2], 'a', ['one', 'two']));
console.log(concat([1, 2], ['three'], 4));