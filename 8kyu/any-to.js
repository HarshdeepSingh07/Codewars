// function that returns a function that adds to any number;



function add(n) {
    //   PREP 
    //   CREATE FUNCTION WHICH RETURNS FUNCTION 
    //   THAT ADDS N TO ANY NUMBER
      return function(m) {
        return m + n;
      }
    }