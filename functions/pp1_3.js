let basket = 'empty';

function goShopping() {
  function shop1() {
    basket = 'tv';    // basket resolves as the global variable on line 1. the reassignment assigns tv to the variable.
  }

  console.log(basket);   // logs 'emty'

  let shop2 = function() {
    basket = 'computer';  // basket is reassigned to 'computer'
  };

  const shop3 = () => {
    let basket = 'play station';  // basekt is already declared on line 1, since here is within a function scope, the basket here is treated as a new variable.
    console.log(basket);    // logs 'play station'
  };

  shop1();   
  shop2();
  shop3();      // logs play station

  console.log(basket);  // logs 'computer'
}

goShopping(); 

// logs 'empty'
// logs 'play station'
// logs 'computer'