function endsOf(beginningArr, endingArr) {
  let result = [];
  result.push(beginningArr[0], endingArr[endingArr.length - 1]);
  return result;
}

console.log(endsOf([4, 8, 15], [16, 23, 42]))