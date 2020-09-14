function oddElementsOf(arr) {
  let result = [];
  for (let idx = 0; idx < arr.length; idx += 1) {
    if (idx % 2 !== 0) {
      result.push(arr[idx]);
    }
  }
  return result;
}