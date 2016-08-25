/*
* Write a function that takes an array of numbers and a target number. 
* It should find two different items in the array that, when added together, 
* give the target value. The indices of these items should then be returned 
* in an array like so: [index1, index2].
*/

// Brute force solution
function twoSum(array, target){
  for(var i = 0; i < array.length; i++){
    for(var j = 0; j < array.length; j++){
      if(i != j && array[i] + array[j] === target){
        return [i, j]
      }
    }
  }
}


// Alternative O(n) solution
function twoSum(array, target) {
  var temp, hash = {};
  array.forEach(function(number, i){ hash[number] = i; })
  for (var i = 0; i < array.length; i++){
    temp = target - array[i];
    if (hash[temp] !== 'undefined'){
      return [i, hash[temp]]
    } 
  }
}