let obj = {
  b: 2,
  a: 1,
  c: 3,
};

let arr = Object.keys(obj).map( idx => idx.toUpperCase())

console.log(arr);
console.log(obj);