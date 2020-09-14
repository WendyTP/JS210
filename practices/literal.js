const person = {
  firstName() {
    return 'Victor';
  },
  lastName() {
    return 'Reyes';
  },
};

console.log(`${person.firstName} ${person.lastName}`);
/* 
firstName() {
  return 'Victor';
} lastName() {
  return 'Reyes';
}

The firstName and lastName point to the two functions.
To invoke the functions we need to do: person.firstName()
*/