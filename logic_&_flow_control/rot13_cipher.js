/*
requirement: a function that takes a string and return a new string of rot13 cipher.
  Letters preserve cases. Non-alphabets left unmodifed.
exception: input non-string
algo:
  create an array of uppercase letters
  create an array of lowercase letters
  let newString = ''
  iterate through given string: if letter match lowercase/uppercase letter, add 13 to current letter's index (in array) to get a new string. If the addition is over 25, count from 0 again.
  else, add current letter to newString
  return newString
*/

const LOWERCASE_ALPHABETS = 'abcdefghijklmnopqrstuvwxyz'.split('');
const UPPERCASE_ALPHABETS = LOWERCASE_ALPHABETS.map(letter => letter.toUpperCase());
const OFFSET = 13;
const ALPHABET_LENGTH = 26;

function rotateAlphabets(alphabetSet, letter) {
  let encodedAlphabetIndex = alphabetSet.indexOf(letter) + OFFSET;

  if (encodedAlphabetIndex >= ALPHABET_LENGTH) {
    encodedAlphabetIndex -= ALPHABET_LENGTH;
  }

  return alphabetSet[encodedAlphabetIndex];
}

function rot13(string) {
  if (typeof string !== 'string') {
    return 'Invalid input!'
  }

  let cipherText = '';

  for (let idx = 0; idx < string.length; idx += 1) {
    if (LOWERCASE_ALPHABETS.includes(string[idx])) {
      cipherText += rotateAlphabets(LOWERCASE_ALPHABETS, string[idx]);
    } else if (UPPERCASE_ALPHABETS.includes(string[idx])) {
      cipherText += rotateAlphabets(UPPERCASE_ALPHABETS, string[idx]);
    } else {
      cipherText += string[idx];
    }
  }
  return cipherText;
}

console.log(rot13(undefined))

console.log(rot13(''))
console.log(rot13('   we  '))
console.log(rot13('Teachers open the door, but you must enter by yourself.'));

console.log(rot13(rot13('Teachers open the door, but you must enter by yourself.')));