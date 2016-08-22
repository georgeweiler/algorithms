Array.prototype.isSubsetOf = function(array) {

  function recurse(i){
    console.log("starting to recurse at ", i)
    console.log('going from ' + i + " to " + this.length)
    console.log("-----------")

    for(i; i<this.length; i++){
      if(i === this.length-1){
        return true
      }
      for(var j = 0; j<array.length; j++){
        console.log('this[' + i + ']: '+ this[i])
        console.log('array[' + j + ']: '+ array[j])
        console.log("-----------")
        if (this[i] === array[j]){
          console.log('found a match')
          console.log("")
          console.log("")
          recurse.call(this, i + 1)
        }
      }
    }
  }
  return recurse.call(this, 0)
};

console.log([1, 'cat', 3].isSubsetOf([4, 'cat', 1]))