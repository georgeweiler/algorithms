//Given a list of non negative integers, arrange them such that they form the largest number.
//For example, given [3, 30, 34, 5, 9], the largest formed number is 9534330.

function quickSort(array){
  if(array.length === 0 ){
    return []
  }
  let pivot = array[array.length-1]; // pivot is last item in the array
  let left = [];
  let right = [];
  for(var i = 0; i<array.length - 1; i++) {
    array[i] < pivot ? left.push(array[i]) : right.push(array[i])
  }
  return quickSort(left).concat(pivot, (quickSort(right)))
}

var largestNumber = function(nums) {
    let lessThan10 = [];
    let greaterThan10 = [];

    for(var i = 0; i<nums.length; i++){
      if(nums[i] < 10){
        lessThan10.push(nums[i]);
      } else {
        greaterThan10.push(nums[i])
      }
    }
    lessThan10 = quickSort(lessThan10).reverse();
    greaterThan10 =quickSort(greaterThan10).reverse();
    
    console.log(lessThan10);
    console.log(greaterThan10);
};

var nums = [3, 2, 7, 81, 30, 34, 5, 9];
console.log(largestNumber(nums))