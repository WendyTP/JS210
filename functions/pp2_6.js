let a = 'hello';

for (let index = 0; index < 5; index += 1) {
  let a = index;
}

console.log(a);   // logs 'hello'

/*
let a = 'hello';
for (let index = 0; index < 5; index += 1) {
  let a;
  a = 'index;
}

let a on line 4 is at block level

*/