// if name and password matches if letter casing 

function Sleigh() {}

Sleigh.prototype.authenticate = function(name, password) {
  // TODO
  if(name === "Santa Claus" && password === "Ho Ho Ho!") {
    return true
  }else {
    return false;
  }
};