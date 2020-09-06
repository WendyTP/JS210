/*
requirement: a function that takes a sorted array of integers as an argument, 
  and returns an array that includes all the missing integers (in order) between the first and last elements of the argument.
algo:
  iterate arr.length - 1 times:
  if (idx + 1) - idx !== 1 : 
    count = (idx + 1) - idx - 1
    countIdx = 1
    push arr[idx] + countIdx to new arr;push arr[idx] + countIdx +1
*/

/* first try
function missing(arr) {
  let newArr = [];
  for (let idx = 0; idx < arr.length - 1; idx += 1) {
    let counts = arr[idx + 1] - arr[idx]
    if (counts === 1) {
      continue;
    } else {
      for (let count = 1; count < counts; count += 1 ) {
        newArr.push(arr[idx] + count);
      }
    }
  }
  return newArr;
}
*/

function missing(arr) {
  let lowestNum = arr[0];
  let highestNum = arr[arr.length - 1];
  let newArr = [];
  for (let count = 1; count < highestNum - lowestNum; count += 1) {
    if ( arr.includes(lowestNum + count)) {
      continue;
    } else {
      newArr.push(lowestNum + count);
    }
  }
  return newArr;
}

console.log(missing([-3, -2, 1, 5]));
console.log(missing([1, 2, 3, 4]));
console.log(missing([1, 5]));
console.log(missing([6]));