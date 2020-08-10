let names = ['chris', 'kevin', 'naveed','pete'];
let upperNames = [];

for (let index = 0; index < names.length; index += 1) {
  if (names[index] === 'naveed') {
    continue;
  }

  upperNames.push(names[index].toUpperCase());
}

console.log(upperNames);