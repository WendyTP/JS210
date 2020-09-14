const array1 = ['Moe', 'Larry', 'Curly', 'Shemp', 'Harpo', 'Chico', 'Groucho', 'Zeppo'];
const array2 = [];

for (let i = 0; i < array1.length; i += 1) {
  array2.push(array1[i]);
}

for (let i = 0; i < array1.length; i += 1) {
  if (array1[i].startsWith('C')) {
    array1[i] = array1[i].toUpperCase();
  }
}

console.log(array2);

/*
The output should be ['Moe', 'Larry', 'Curly', 'Shemp', 'Harpo', 'Chico', 'Groucho', 'Zeppo']
The reason why the mutation does not affect the array array2 points to is because
array1 and array2 points to two different arrays. 
On line 2 when we assign array2 an empty array, this step essentially establishes the fact that
both array1 and array2 reference different array, even though their values are the same following 
the first loop. 

Hence the mutation on array1 does not impact array2

*/