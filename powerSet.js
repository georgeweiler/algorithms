// Return an array that contains the power set of a given string. The power set is a set of all the possible subsets, including the empty set.

// Make sure your code does the following:

// All characters in a subset should be sorted alphabetically, and the array of subsets should be sorted alphabetically.
// Sets of the same characters are considered duplicates regardless of order and count only once, e.g. ‘ab’ and ‘ba’ are the same.
// Duplicate characters in strings should be ignored; for example, ‘obama’ should be evaluated as if it only contained one ‘a’. See the result below.

function removeDuplicates(array){
  let container = []
  for(var i = 0; i<array.length; i++){
    if(container.indexOf(array[i]) === -1){
      container.push(array[i]);
    }
  }
   return container
}

let powerSet = function(str){
  let filtered = removeDuplicates(string.split(""));
  let result = []
  function subroutine(array){
    for(var i = 0; i<filtered.length; i++){
      var temp = filtered[i]
      for(var j = i+1; j<filtered.length; j++){
      temp += filtered[j];
      subroutine(filtered)
      }
    }
  }
  subroutine(filtered)
  return result
}

let string = "ehors"

console.log(powerSet(string))
