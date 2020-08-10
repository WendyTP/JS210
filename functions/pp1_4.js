function hello() {
  a = 'hi';    // this is treated as a global variable since it's not declared with any keywords (let, const, var, or function)
}

hello();    // returns undefined by default
console.log(a);  // logs 'hi'