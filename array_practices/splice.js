
function splice(arr, startIdx, deleteCount) {
  let originalArr = arr;
  let removedValues = [];
  for (let idx = startIdx; idx < (startIdx + deleteCount); idx += 1) {
    removedValues.push(arr[idx]);
    arr[idx] = arr[idx + deleteCount]
  }

  arr.length = arr.length - removedValues.length;
  return removedValues;
}


let count = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(splice(count, 2, 5));
//splice(count, 2,5)
console.log(count)

//[3,4,5,6,7]
//[1,2,8]