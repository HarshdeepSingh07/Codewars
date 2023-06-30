// if year is leap or not with conditions that 
// #1 should be divisible by 4 and 400
// #2 should not be divisible by 100


function isLeapYear(year) {
    // TODO
    
    if(year % 4 === 0 && year % 100 !== 0) {
      return true;
    }else if(year % 400 === 0) {
      return true
    }else {
      return false;
    }
  }