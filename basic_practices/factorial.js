function times(number) {
  let result = 1;
  for (; number > 0; number -= 1) {
    result = result * number;
  }
  console.log(result);
}

times(1);
times(2);
times(3);
times(4);
times(5);
