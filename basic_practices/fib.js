// 0,1, 1,2,3,5,8,13...

function fibNumber(nthNumber) {
  if (nthNumber === 0 || nthNumber === 1) {
    return nthNumber;
  } else {
    let newFibNum = fibNumber(nthNumber -1) + fibNumber(nthNumber -2);
    return newFibNum;
  }
}

console.log(fibNumber(0));
console.log(fibNumber(1));
console.log(fibNumber(2));
console.log(fibNumber(7));