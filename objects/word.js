function wordCount(str) {
  let obj = {};
  words = str.split(' ');
  
  words.forEach(word => {
    if (Object.keys(obj).includes(word)) {
      obj[word] += 1;
    } else {
      obj[word] = 1;
    }
  })
  return obj;
}

console.log(wordCount('box car cat bag box'));