let rlSync = require('readline-sync');
let answer;

do {
  answer = rlSync.question('Do you want to play again? ');
} while (answer === 'y');