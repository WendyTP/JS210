function matrixSums(arr) {
  return arr.map(nestedArr => {
    return nestedArr.reduce(function(sum, item) {
      return sum + item;
    })
  })
}

console.log(matrixSums([[2, 8, 5], [12, 48, 0], [12]]))