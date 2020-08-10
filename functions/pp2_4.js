function hello() {
  a = 'hello';    // treated as global variabel
  console.log(a);

  if (false) {
    let a = 'hello again';   // let varible is at block level
  }
}

hello();  // logs 'hello'
console.log(a);   // 'hello'

/*
function hello() {
  a = 'hello';  
  console.log(a);

  if (false) {
    let a 
    a = 'hello again';   
  }
}
*/ 
