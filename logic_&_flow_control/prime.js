/*
requirement: a function to check if a given num arg is prime or not
assume argument is non-negative integer ( >= 0)
prime : num % num === 0 / num % 1 === 0 ; 1 is not prime
algo:
  return false if num is 0
  iterate from 2 to num -1, if thee's any number can devide num, return false
  otherwise return true 

*/

let isPrime = (number) => {
  if (number <= 1) {
    return false;
  }

  for (let divider = 2; divider < number; divider += 1) {
    if (number % divider === 0) {
      return false;
    }
  }
  return true;
};


console.log(isPrime(1));
console.log(isPrime(2));
console.log(isPrime(3));
console.log(isPrime(5));
console.log(isPrime(43));
console.log(isPrime(55));
console.log(isPrime(0));