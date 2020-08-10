var a = 'hello';

for (var index = 0; index < 5; index += 1) {
  var a = index;
}

console.log(a); // log 4

/*
var a;
a = 'hello';

for (var index = 0; index < 5; index += 1) {
  a = index;
}

var variable is not a block level scope. In this case, 
it is at global level, thus, JS hoist var a to the top of the file.
*/