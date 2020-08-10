function allCaps(text) {
  if (text.length > 10) {
    return text.toUpperCase();
  } else {
    return text;
  }
}

console.log(allCaps('tes'));
console.log(allCaps('teswefergeghwe'));