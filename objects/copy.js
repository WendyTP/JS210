function copyProperties(source, destination) {
  for (let name in source) {
    destination[name]= source[name];
  }
  return Object.keys(source).length;
}

let hal = {
  model: 9000,
  enabled: true,
};

let sal = {};

console.log(copyProperties(hal, sal));
console.log(sal);