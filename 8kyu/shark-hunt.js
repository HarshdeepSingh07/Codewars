// caluclating the alive or dead ratio according to given inputs

function shark(pontoonDistance, sharkDistance, youSpeed, sharkSpeed, dolphin){
    if(dolphin){
      sharkSpeed /= 2;
    }
    return pontoonDistance/youSpeed < sharkDistance/sharkSpeed ? "Alive!" : "Shark Bait!";
  }