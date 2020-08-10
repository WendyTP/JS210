function hello() {
  let a = 'hello';
}

hello();  // returns undefined by default
console.log(a);  // Uncaught ReferenceError -- a is not defined. 
// variable a one line 2 is within function scope, which is
// not accessible outside of the function. 