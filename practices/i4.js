function matrixSums(arr) {
  return arr.map((innerArr) => {
    return innerArr.reduce((sum, num) => sum + num);
  })
}

let nested = [[2, 8, 5], [12, 48, 0], [12]];
console.log(matrixSums(nested));
console.log(nested);