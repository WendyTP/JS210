function randomNumber(min, max) {
  if (min > max) {
    [min, max] = [max, min];
  }

  let num = Math.floor(Math.random() * (max - min + 1)) + min;
  return num;
}

console.log(randomNumber(5, 1))
console.log(randomNumber(2, 4));
console.log(randomNumber(2,2))