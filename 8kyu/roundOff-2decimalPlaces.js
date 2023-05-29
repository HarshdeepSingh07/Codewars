// rounding off the number till 2 deicmal places


// my solution

function twoDecimalPlaces(n) {
    
    
    let number = n.toFixed(2)
    return Number(number)
  }


  // another solution
  function twoDecimalPlaces(n) {
    return Math.round(n*100)/100;
  }

