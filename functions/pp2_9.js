let a = 'outer';
let b = 'outer';

console.log(a);    // logs 'outer'
console.log(b);   // logs 'outer'
setScope(a);      // returns undefined
console.log(a);   // logs 'outer
console.log(b);   // logs 'inner'

function setScope(foo) {    // foo = a   ; foo = 'outer'
  foo = 'inner';            // foo = 'inner'
  b = 'inner';              // b reassigned to 'inner'
}

/*
let a = 'outer';
let b = 'outer';
function setScope(foo) {
  foo = 'inner';
  b = 'inner';
}

console.log(a);
console.log(b);
setScope(a);
console.log(a);
console.log(b);




*/
