let a = 'outer';

function testScope() {
  let a = 'inner';
  console.log(a);
}

console.log(a);  // log 'outer'
testScope();     // log 'inner' 
console.log(a);  // log 'outer'
/*
Line 8 is the first invocation of console.log; here, a resolves as the global variable a on line 1. 
Line 9 calls the testScope function; in the function, a resolves as the local variable on line 4, so line 5 logs inner.
After testScope returns, the a on line 10 resolves as the global variable on line 1 again; therefore, it logs outer
*/
