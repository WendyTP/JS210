let a = 1;

function foo() {
  a = 2;                   // a ressigned to 2
  let bar = function() {
    a = 3;                 // a reassiged to 3
    return 4;
  };

  return bar();     // bar() returned 4
}

console.log(foo());     // logs 4
console.log(a);        // logs 3

/*


*/