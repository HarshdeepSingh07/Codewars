// max difference between largest and smallest



function maxDiff(list) {
    if(!list.length) return 0;
    return Math.max(...list) - Math.min(...list);
  };