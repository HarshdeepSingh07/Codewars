// removing first and last element from given array

function array(arr){
    return arr.split(",").slice(1,-1).join(" ") || null;
  }