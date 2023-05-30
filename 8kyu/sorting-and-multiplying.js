// sorting array in ascending order and mulitplying every interger in it.

// my solution 

function grow(x){
    let sorted = x.sort((a,b) => a - b)
    let answer = sorted.reduce((c,d) => c * d, 1)
    return answer;
   }


// another solution

const grow=x=> x.reduce((a,b) => a*b);