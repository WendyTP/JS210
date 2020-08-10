let a = 'outer'; 

console.log(a);    // outer
setScope();        // TypeError - setScope is not a function
console.log(a);    // programm stopped to run after the error above

var setScope = function () {
  a = 'inner';
};


/*
let a;
var setScope;    // setScope is assigned with undefined

let a = 'outer'
console.log(a);  
setScope();
console.log(a);

setScope = function () {
  a = 'inner'
};


*/
