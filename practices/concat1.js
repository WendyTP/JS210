function concat(arr1, value) {
  let result = arr1.slice();
  if (Array.isArray(value)) {
    value.forEach((item) => result.push(item));
  } else {
    result.push(value);
  }
}