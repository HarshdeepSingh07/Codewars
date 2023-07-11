// move the player on dice from left to right 2 times


function move (position, roll) {
    // return the new position
    
    
  //   PREP
    
    // hero moves left to right 
    // 2 times the dice count
    // function takes 2 parameter
    // current postition and roll count
    
    
    let currentPosition = position;
    let rolling = roll * 2;
    
    return currentPosition + rolling;
    
    
    
  }