// filtering intergers from string from the given array!



function filter_list(l) {
  return l.filter(function(v) {return typeof v == 'number'})
}