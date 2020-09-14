function missing(arr) {
  let result = [];
  let smallestNum = arr[0];
  let largestNum = arr[arr.length - 1];

  for  (let num = smallestNum; num < largestNum; num += 1) {
    if (arr.indexOf(num) === -1) {
      result.push(num);
    }
  }

  return result;
}

console.log(missing([-3, -2, 1, 5]));
console.log(missing([1, 2, 3, 4]));
console.log(missing([1, 5]));
console.log(missing([6]));