/* 
don't use map or filter. use reduce method
*/

function oddLengths(array) {
   return array.reduce((accumulator, string) => {
     if (string.length % 2 !== 0) {
       accumulator.push(string.length);
     }
     return accumulator;
   }, [])
}


let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];
console.log(oddLengths(arr)); // => [1, 5, 3]