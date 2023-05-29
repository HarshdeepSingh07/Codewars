//  function that returns the values of an array that are not odd



//  My solution

function noOdds( values ){
    let filterNums = values.filter(x => x % 2 == 0)
    return filterNums
}


// another solution
function noOdds( values ){
    const noOdds = values => 
    values.filter(val => !(val&1));
}