function allMatches(words, regex) {
  let matchedWords = [];

  matchedWords = words.filter(word => {
    return word.match(regex);
  });

  return matchedWords;
}

let words = [
  'laboratory',
  'experiment',
  'flab',
  'Pans Labyrinth',
  'elaborate',
  'polar bear',
];

console.log(allMatches(words, /lab/)); // ['laboratory', 'flab', 'elaborate']