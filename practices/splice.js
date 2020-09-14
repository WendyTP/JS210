function splice(array, start, deleteCount, ...elements) {
  start = start > array.length ? array.length : start;
  deleteCount = deleteCount > (array.length - start) ? array.length - start : deleteCount;

  let deletedCount = array.slice(start, start + deleteCount)

  let beforeDeletedElements = array.slice(0, start)  
  let afterDeletedElements = array.slice(start + deleteCount)

  elements.forEach((element) => {
    beforeDeletedElements.push(element);
  })

  let splicedArrCopy = beforeDeletedElements.concat(afterDeletedElements)

  array.length = 0;

  splicedArrCopy.forEach(element => array.push(element));

  return deletedCount;

}

console.log(splice([1, 2, 3], 1, 2));
console.log(splice([1, 2, 3], 1, 3));
console.log(splice([1, 2, 3], 1, 0));
console.log(splice([1, 2, 3], 0, 1));
console.log(splice([1, 2, 3], 1, 0, 'a'));


const arr2 = [1, 2, 3];
console.log(splice(arr2, 1, 1, 'two'));
console.log(arr2);

const arr3 = [1, 2, 3];
console.log(splice(arr3, 1, 2, 'two', 'three'));
console.log(arr3);

const arr4 = [1, 2, 3]
console.log(splice(arr4, 1, 0));
console.log(splice(arr4, 1, 0, 'a'));
console.log(arr4);

const arr5 = [1, 2, 3];
console.log(splice(arr5, 0, 0, 'a'));
console.log(arr5);




