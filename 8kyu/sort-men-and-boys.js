// sort out mens and boys form array then merging it out!



function menFromBoys(arr){
    //your code here
    arr = Array.from(new Set(arr));
    let even = arr.filter(x => x % 2 === 0);
    let odd = arr.filter(a => a % 2 !== 0);
    
    even.sort((c,d) => c - d, 0)
    odd.sort((ab, bc) => bc - ab, 0 )
    
     return even.concat(odd);
}  