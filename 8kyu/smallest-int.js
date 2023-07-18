// smallest integer in array


class SmallestIntegerFinder {
    findSmallestInt(args) {
       args.sort((a,b) => a -b,0)
      return args[0]
    }
  }