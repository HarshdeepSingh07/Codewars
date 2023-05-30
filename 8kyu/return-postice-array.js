// Return the sum of all positive intergers in the given array


// my solution

function positiveSum(arr) {
    let newArr = arr.filter(x => x >= 0)
    let ans = newArr.reduce((x,y) => x + y,0)
    return ans;
    
  }



// another solution


function positiveSum(arr) {
    var total = 0;    
    for (i = 0; i < arr.length; i++) {   
      if (arr[i] > 0) {                   
        total += arr[i];                 
      }
    }
    return total;                         
  }