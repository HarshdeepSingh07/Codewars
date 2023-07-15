// converting strings in the array to intergers

function toNumberArray(stringarray){
  
    let anotherOne = stringarray.map(x => Number(x))
    return anotherOne;
  }