function sumOfSquares(numbers) {
  return numbers.reduce((accumulator, num) => 
  accumulator + (num * num), 0);
}

let numbers = [3, 5, 7];
console.log(sumOfSquares(numbers)); // => 83