function objectHasProperty(object, string) {
  return Object.keys(object).includes(string);
}

let pets = {
  cat: 'Simon',
  dog: 'Dwarf',
  mice: null,
};

console.log(objectHasProperty(pets, 'dog'));
console.log(objectHasProperty(pets, 'lizard'));
console.log(objectHasProperty(pets, 'mice'));