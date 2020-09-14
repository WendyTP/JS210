function isEmpty(value) {
  let type = typeof value;
  if (type === 'string') {
    return value.length === 0;
  } else if (Array.isArray(value)) {
    return value.length === 0;   
  }else if (type === 'object') {
    return Object.keys(value).length === 0;
  }
}

let arr = []
arr[-2] = 'we'
let arr2 = []
arr2.length = 5
let arr3 = []
arr3['w'] = 'ee'
console.log(isEmpty(arr))
console.log(isEmpty(arr3))
console.log(isEmpty([3]))
console.log(isEmpty([]))