let names = ['chris', 'kevin', 'pete', 'naveed'];
let foundName = [];

for (let index = 0; index < names.length; index += 1) {
  if (names[index] === 'pete') {
    foundName.push(names[index]);
    break;
  }
}

console.log(foundName);

