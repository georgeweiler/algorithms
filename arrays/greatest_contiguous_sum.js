// Given an array of numbers, calculate the greatest contiguous sum of numbers in it. 
// A single array item will count as a contiguous sum

function greatestContSum(array){
  if(array.length === 1) return array[0];
  var maxSum = array[0];
  for(var i = 0; i<array.length; i++){
    var tempSum = 0;
    for(var k = i; k<array.length; k++){
      tempSum+= array[k];
      if(tempSum > maxSum){
        maxSum = tempSum;
      }
    }
  }
  return maxSum;
}

let arr1 = [ 1, 2, 3 ] // ---> 6
let arr2 = [ 4, -1, 5 ] // ---> 8
let arr3 = [ 10, -11, 11 ] // --->11
let arr4 = [ 1, 2, 3, -6, 4, 5, 6 ] // ---> 15
let arr5 = [-7,-6,-9] // ---> -6

console.log(greatestContSum(arr1))
console.log(greatestContSum(arr2))
console.log(greatestContSum(arr3))
console.log(greatestContSum(arr4))
console.log(greatestContSum(arr5))
