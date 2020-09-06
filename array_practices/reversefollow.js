/*
function addReverse(arr) {
  let newArr = [];
  for (let idx = 0; idx < arr.length; idx += 1) {
    newArr.push(arr[idx]);
  }

  for (let idx = arr.length -1; idx >= 0; idx -= 1) {
    newArr.push(arr[idx]);
  }
  return newArr;
}
*/

function addReverse(arr) {
  let copiedarr = arr.slice(0);
  return arr.concat(copiedarr.reverse())
}

let count = [1,2,3,4,5];
console.log(addReverse(count));
console.log(count)