// getting first and last element out of js


var min = function(list){
  
    list.sort((a,b) => a -b,0)
      return list[0];

  }
  
  var max = function(list){
    
      list.sort((a,b) => a -b,0)
      return list[list.length -1 ]
      
  }