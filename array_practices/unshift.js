/* first try
function unshift(arr, element) {
  let newArr = [];
  newArr[0] = element;
  for (let idx = 1; idx <= arr.length; idx += 1) {
    newArr[idx] = arr[idx - 1];
  }
  
  for (let idx = 0; idx < newArr.length; idx += 1) {
    arr[idx] = newArr[idx]
  }

  return arr.length;
}
*/

// simpler way
function unshift(arr, element) {
  for (let idx = arr.length; idx > 0; idx -= 1) {
    arr[idx] = arr[idx - 1];
  }
  arr[0] = element;
  return arr.length;
}

let count = [1,2,3];
console.log(unshift(count, 'a'));
console.log(count);