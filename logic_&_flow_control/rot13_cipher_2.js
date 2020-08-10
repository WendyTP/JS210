/*
algo:
   'a'.charCodeAt() === 97;
   'A'.charCodeAt() === 65;  (97 - 32 = 65)
   'z'.charCodeAt() === 122;
   'Z'.charCodeAt() === 90;

  String.fromCharCode(97) === 'a';
  'abcdefghijklm   nopqrstuvwxyz'
  
  if letter between a-m/ A-M : letter.charCodeAt() += 13;
  if letter between n-z/N-Z  : letter.charCodeAt() -= 13
  if non-alphabet: append it direclty to newString
*/

const OFFSET = 13;

function rotateAlphabet(letter) {
  let charAsciiCode = letter.charCodeAt();

  if (/[a-mA-M]/.test(letter)) {
    charAsciiCode += OFFSET;
  } else if (/[n-zN-Z]/.test(letter)) {
    charAsciiCode -= OFFSET;
  }

  return String.fromCharCode(charAsciiCode);
}

function rot13(string) {
  if (typeof string !== 'string') {
    return 'invalid input!';
  }

  let cipherText = '';

  for (let idx = 0; idx < string.length; idx += 1) {
    if (/[a-zA-Z]/.test(string[idx])) {
      cipherText += rotateAlphabet(string[idx]);
    } else {
      cipherText += string[idx];
    }
  }

  return cipherText;
}


//console.log(rot13(undefined))

//console.log(rot13('we'))

console.log(rot13('Teachers open the door, but you must enter by yourself.'));
console.log(rot13(rot13('Teachers open the door, but you must enter by yourself.')));