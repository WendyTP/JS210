console.log(a);

function hello() {
  a = 1;   // global variable
}

/*

function hello() {
  a = 1;
}

console.log(a);   // ReferenceError: a is not defined

hello function is defined but never called, thus variable a
is never assigned with any value. Since there's no other a declared elsewhere,
console returns an error.
*/
