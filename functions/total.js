
function sum(numbers) {
  let idx = 0;
  let total = 0;
  for (; idx < numbers.length; idx += 1) {
    total += numbers[idx];
  };

  return total;
};


function average(numbers) {
  return sum(numbers) / numbers.length;
};

console.log(average([1,2,3,4,5]));