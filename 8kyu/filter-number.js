// filtering number from given string in the given order



var FilterString = function(value) {
    return parseInt(value.replace(/[^\d]/g, ""))
  }