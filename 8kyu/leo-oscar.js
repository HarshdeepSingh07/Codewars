// finding out when will leo get oscar



function leo(oscar){
    if(oscar === Number(88)) {
      return "Leo finally won the oscar! Leo is happy";
    }else if(oscar === Number(86)) {
      return "Not even for Wolf of wallstreet?!" ;
    }else if(oscar < Number(88)) {
      return "When will you give Leo an Oscar?" 
    }else if(oscar > 88) {
      return  "Leo got one already!"
    }
  }