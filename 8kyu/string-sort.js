// sorting even and odd index in a string out 


const sortMyString = s => {
    let even = s.split('').filter((v, i) => i % 2 === 0).join('')
    let odd = s.split('').filter((e, a) => a % 2 !== 0).join('')
    return even + ' ' + odd
}