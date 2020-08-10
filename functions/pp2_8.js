var a = 'global';

function checkScope() {
  var a = 'local';         // var a is withing function level. This is a local variable and has nothing to do with global variable a on line 1
  const nested = function() {
    var a = 'nested';
    let superNested = () => {
      a = 'superNested';
      return a;       // superNested
    };

    return superNested();     // superNested
  };

  return nested();         // superNested
}

console.log(checkScope());
console.log(a);     // global

/*
var a;
a = 'global';

function = checkScope() {
  var a;
  a = 'local';
  const nested = function() {
    a = 'nested';
    let superNested = () => {
      a = 'superNested';

}



*/