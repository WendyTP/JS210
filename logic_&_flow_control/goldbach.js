/*
 requirement: a  function named checkGoldbach that uses Goldbach's Conjecture to log every pair of primes that sum to the number supplied as an argument.
 (you can express every even integer greater than 2 as the sum of two prime)
   The function takes as its only parameter, an integer expectedSum, 
   and logs all combinations of two prime numbers whose sum is expectedSum.
   Log the prime pairs with the smaller number first. If expectedSum is odd or less than 4, your function should log null.
algo:
  12 :
    1, 11
    2, 10
    3, 9
    4, 8
    5, 7
    6, 6
divide by two to get first half nums
remove all nums that are not primes
iterate through remaiing primes: 
check correspondant num if it's prime
if yes, log both number
continue until end of iteration

(primes: 2, 3, 5, 7, ...)
 */

 function isPrime(number) {
   if (number <= 1 || (number % 2 === 0 && number > 2)) {
     return false;
   }

   for (let divider = 3; divider < number; divider += 2) {
      if (number % divider === 0) {
        return false;
      }
   }

   return true;
 }

 function checkGoldbach(expectedSum) {
   if (expectedSum % 2 !== 0 || expectedSum < 4) {
     console.log(null);
     return;
   }

   let firstHalfPrimes = [];

   for (let num = 1; num <= expectedSum / 2; num +=1) {
      if (isPrime(num)) {
        firstHalfPrimes.push(num);
      }
    }

    firstHalfPrimes.forEach(prime => {
      if (isPrime(expectedSum - prime)) {
        console.log(`${prime} ${expectedSum - prime}`)
      }
    })
  }

 checkGoldbach(3);
 checkGoldbach(7);
 checkGoldbach(4);
 checkGoldbach(12);
 checkGoldbach(100);

