function say() {
  if (false) {
    let a = 'hello from inside a block';
  }

  console.log(a);
}

say();  // ReferenceError: a is not defined

/* 
function say() {
  if (false) {
    let a;
    a = 'hello from inside a block';
  }

  console.log(a);
}
*/
