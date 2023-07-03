// return double character for every string 



function doubleChar(str) {

    str.split('').map(c => c + c).join('    ')
}