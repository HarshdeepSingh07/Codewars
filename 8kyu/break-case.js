// break camel casing of the string


function solution(string) {
    return(string.replace(/([A-Z])/g, ' $1'));
  
  }