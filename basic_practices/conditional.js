let rlSync = require('readline-sync');

let a = rlSync.question('Enter a number ');

if (a === '3') {
  console.log('3');
} else if (a === '4') {
  console.log('4');
}else {
  console.log('something');
}
