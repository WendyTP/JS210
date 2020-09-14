function reverse(inputForReversal) {
  let result;
  if (Array.isArray(inputForReversal)) {
    result = [];
    for (let idx = inputForReversal.length - 1; idx >= 0; idx -= 1) {
      result.push(inputForReversal[idx]);
    }
  } else {
    result = '';
    for (let idx = inputForReversal.length - 1; idx >= 0; idx -= 1) {
      result += inputForReversal[idx];
    }
  }
  return result;
}

console.log(reverse('Hello'));
console.log(reverse('a'));
console.log(reverse([1, 2, 3, 4]));
console.log(reverse([]));

const array = [1, 2, 3];
console.log(reverse(array));
console.log(array);