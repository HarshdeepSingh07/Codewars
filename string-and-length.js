// displaying elements in array with thier name and length individually

function addLength(str) {
    let first = str.split(' ').map(`${s} ${s.length}`)
    return first;
    
}