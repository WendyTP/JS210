const myObject = {
  prop1: '123',
  prop2: '234',
  'prop 3': '345',
};

const prop2 = '456';
myObject['prop2'] = '456';
myObject[prop2] = '678';   // === myObject['456'] = '678'

console.log(myObject[prop2]); // '678'
console.log(myObject.prop2);  // '456'

/*
`line 8` myObject['prop2'] reference the prop2 on line 3;
line 9  myObject[prop2] = '678', the prop2 reference the constant prop2 on line7
which has value of '456'. Therefore, this expression is the same as:
myObject['456'] = '678'
*/