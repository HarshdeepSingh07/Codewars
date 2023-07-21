// spaceing each element in string 2 spaces with upper case



function vaporcode(string) {
    let first = string.toUpperCase()
    let second = first.split(' ').join(
    '').split('').join('  ')
    return second;
   }