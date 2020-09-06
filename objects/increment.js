function incrementProperty(obj, str) {
  if (Object.keys(obj).indexOf(str) !== -1) {
    return obj[str] += 1;
  } else {
    return obj[str] = 1
  }
}

let wins = {
  steve: 3,
  susie: 4,
};


console.log(incrementProperty(wins, 'susie'))
console.log(wins);
console.log(incrementProperty(wins, 'lucy'));
console.log(wins);