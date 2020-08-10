function logOddNumbers(number) {
  for (let i = 1; i <= number; i += 2) {
    if (i % 2 === 0) {
      continue;
    }
      console.log(i);
  }
}

logOddNumbers(19);