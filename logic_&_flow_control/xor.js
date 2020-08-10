/* 
requirement: 
 a function named isXor that takes two arguments, and returns true
  if exactly one argument is truthy, false otherwise.
Algo:
  true & true --> false
  false & false --> false
  true & false --> true   

*/

let isXor = function(arg1, arg2) {
  if (Boolean(arg1) === true && Boolean(arg2) === false) {
    return true;
  } else if (Boolean(arg1) === false && Boolean(arg2) === true) {
    return true;
  } else {
    return false;
  }
};

/*  another way
  function isXor(arg1, arg2) {
    if (arg1 && !arg2) {
      return true;
    } else if (!arg1 && arg2) {
      return true;
    } else {
      return false;
    }
  }

  a simpler way
  function isXor(arg1, arg2) {
    return Boolean(arg1) !== Boolean(arg2);
  }
*/

console.log(isXor(true, false))
console.log(isXor(true, false));
console.log(isXor(false, false));
console.log(isXor(true, true));

console.log(isXor(false, 3));
console.log(isXor('a', undefined));
console.log(isXor(null, ''));
console.log(isXor('2', 23));