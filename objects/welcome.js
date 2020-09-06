function greetings(names, titleAndOccupation) {
  let fullName = names.join(' ')
  let title = titleAndOccupation.title;
  let occu = titleAndOccupation.occupation;
  console.log(`Hello, ${fullName}! Nice to have a \
${title} ${occu} around.`);
}

greetings(['John', 'Q', 'Doe'], { title: 'Master', occupation: 'Plumber' });