function isPrime(number) {
  if (number <=1 ||(number > 2 && number % 2 === 0)) {
    return false;
  }

  for (let divider = 3; divider < number; divider += 2) {
    if (number % divider === 0) {
      return false;
    }
  }

    return true;
}

console.log(isPrime(1));
console.log(isPrime(2));
console.log(isPrime(3));
console.log(isPrime(5));
console.log(isPrime(43));
console.log(isPrime(55));
console.log(isPrime(0));