function evenOrOdd(number) {
  if ( parseInt(number) !== number ){
    return console.log(' not integer');
  } else if ( number % 2 === 0 ) {
    console.log('even');
  } else {
    console.log('odd');
  }
}

evenOrOdd(3.5);
evenOrOdd('we3');
evenOrOdd('32');
evenOrOdd(3);
evenOrOdd(4)