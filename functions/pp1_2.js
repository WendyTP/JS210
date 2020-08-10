let a = 'outer';

function testScope() {
  a = 'inner';
  console.log(a);
}

console.log(a); // logs 'outer'
testScope();    // logs 'inner'
console.log(a); // logs 'inner'
/*
line 8 console.log(a) when called, looks for the variable a which is
also at the same scope -- global scope, and it founds that on line 1 - hence `outer`.

line 9 testScope function is invoked, since global variable can be accessed anywhere,
the a on line 4 is the same variable as that on line 1, therefore, line 4 is 
ressign variable a to 'inner. When line5 is executed, it logs 'inner'.

Since variable a is assigned with 'inner', this is the logging result after
line 10 is executed.
*/