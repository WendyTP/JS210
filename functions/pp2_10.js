let total = 50;
let increment = 15;

function incrementBy(increment) {
  total += increment;     // total = total + increment   (50 + 10) total is reassigned to 60
}

console.log(total);   // 50
incrementBy(10);
console.log(total);  // 60
console.log(increment);  // 15