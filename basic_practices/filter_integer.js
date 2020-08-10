/* 
Number.isInteger(5) => true
let arr = [1,2,3]
arr.filter(i => i === 2); -> [2]
arr => [1,2,3]
*/

function removeNonInteger(array) {
  return array.filter(element => Number.isInteger(element))
}


let array = [1, 'a', '1', 3, NaN, 3.1415, -4, null, false];
let newArray = removeNonInteger(array);
console.log(newArray); // => [1, 3, -4]

// another shorter solution
function removeNonInteger(array) {
  return array.filter(Number.isInteger);
}