/*
requirement:
  - get 3 scores from user (assume all input are positive integer)
  - If the average score is greater than or equal to 90 then the grade is 'A'
If the average score is greater than or equal to 70 and less than 90 then the grade is 'B'
If the average score is greater than or equal to 50 and less than 70 then the grade is 'C'
If the average score is less than 50 then the grade is 'F'
*/

let rlSyn = require('readline-sync');
let scores = [];
let score;


for(let prompt = 1; prompt <=3; prompt += 1) {
  score = rlSyn.question(`Enter score ${prompt}: `);
  scores.push(Number(score));
}

let average = (scores.reduce((accu, ele) => accu + ele, 0)) / 3 ;
let grade;

if (average >= 90) {
  grade = 'A';
} else if (70 <= average < 90) {
  grade = 'B';
} else if (50 <= average < 70) {
  grade = 'C';
} else {
  grade = 'F'
}

console.log(`Based on the average of your 3 scores your letter grade is "${grade}".`)