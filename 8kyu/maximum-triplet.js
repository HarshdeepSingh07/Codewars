// maximun triplet which can be formed of an array



const maxTriSum = numbers => {
    const [a,b,c,...rest] = [...new Set([...numbers])].sort((a,b)=>b-a)
    return a+b+c
  }