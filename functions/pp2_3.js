function hello() {
  a = 'hello'; 
  console.log(a);

  if (false) {
    var a = 'hello again';
  }
}

hello();   // logs 'hello'
console.log(a);   // ReferenceError - a is not defined

/* 
function hello() {
  var a;
  a = 'hello';
  console.log(a);
  
  if (false) {
    a = 'hello again'
  }
}
*/
