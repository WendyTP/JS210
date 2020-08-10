function say() {
  if (false) {
    var a = 'hello from inside a block';
  }

  console.log(a);
}

say();  // logs undefined

/*
The scope of variables declared with var is function-level, not block-level.


function say() {
  var a;
  if (false) {
    a = 'hello ...';
  }
  console.log(a)
}


*/


