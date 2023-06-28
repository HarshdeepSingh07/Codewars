// commenting your favourite person differently





// my solution

function greet(name){
 
    if(name === "Johnny") {
      return `Hello, my love!`;
      }
    else {
     return "Hello, " + name + "!";
    }
  }




  // another solution


  function greet(name){
    return "Hello, " + (name == "Johnny" ? "my love" : name) + "!";
  }