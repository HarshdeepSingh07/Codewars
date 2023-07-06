// determinig the price of mangoes



function mango(quantity, price){
    return price * (quantity - Math.floor(quantity / 3));
  }