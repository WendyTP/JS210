function copyObj(obj, objKeys= []) {
  let newObj = {};
  
  if (objKeys.length > 0) {
    objKeys.forEach((key) => newObj[key] = obj[key])
  } else {
    Object.assign(newObj, obj)
  };

  return newObj;
};

let objToCopy = {
  foo: 1,
  bar: 2,
};

let newObj2 = copyObj(objToCopy);
console.log(newObj2.foo);    // => 1
console.log(newObj2.bar);    // => 2

let newObj3 = copyObj(objToCopy, [ 'foo' ]);
console.log(newObj3.foo);   // => 1
console.log(newObj3.bar);   // => undefined