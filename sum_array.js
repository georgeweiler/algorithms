//Given an array of numbers, calculate the greatest contiguous 
//sum of numbers in it. A single array item will count as a contiguous sum.

var arr1 = [-7,-6,-9]
var arr2 = [-5,-5,-5,2,3]
var arr3 = [5, -1, 3]


var sumArray = function(array){
  var i = 0
  var currentHighest = Number.NEGATIVE_INFINITY;
  for(var i = 0; i < array.length; i++){
    if(array[i] < 0){ //index is negative <-- run a whole new reduce from there to the end
      var temp = array.slice(i).reduce(function(sum, current){return sum + current;})
      if(temp > currentHighest){ currentHighest = temp;}
      console.log('currentHighest', currentHighest)
    }
    else{ // no negative values
      currentHighest = array.reduce(function(sum, current){return sum + current})
    }
    return currentHighest
  }
}







  // array.reduce(function(sum, current){
    
    

  //   i++



  //   if((sum + current) > sum){
  //     console.log(sum)
  //     return sum + current
  //   }

  //   else if ((sum +current) < sum){
  //     var contiguousSum = sumArray(array.splice(i))
  //     return contiguousSum > current ? contiguousSum : current
  //   }
  // })

console.log(sumArray(arr2))
// console.log(arr.slice(1))