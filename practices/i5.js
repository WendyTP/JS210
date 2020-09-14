function uniqueElements(arr) {
  let newArr = [];
  
  arr.forEach((num) => {
    if (newArr.indexOf(num) === -1) {
      newArr.push(num);
    }
  })

  return newArr;
}

console.log(uniqueElements([1, 2, 4, 3, 4, 1, 5, 4]));