/*
 requirement:
  a password guessing program that tracks how many times the user enters the wrong password.
  if 3 times wrong, log mesage and terminate the programme.
  otherwise, log corrent message and enter program
*/

let rlSync = require('readline-sync');
let password = '123';
let givenPassword = '';

let counter = 1;
let limit = 3;


while(counter <= limit) {
  givenPassword = rlSync.question('What is the password: ');
  
  if (givenPassword === password) {
    console.log('You have successfully logged in.');
    break;
  }

  counter += 1;

  if (counter > limit) {
    console.log('You nave been denied access.')
  }
}


