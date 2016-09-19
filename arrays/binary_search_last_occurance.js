// find index of the last occurance of a number in a sorted array with duplicates

var binarySearch = function(arr, target){
  var low = 0;
  var high = arr.length -1;
  while (low < high) {
    var mid = Math.floor((low+high)/2);
    console.log(mid)
    if(arr[mid] === target){
      return true;
    } else if (arr[mid] > target) {
      console.log('resetting low to ', low)
      low = mid - 1;
    }
    else if(arr[mid] < target){
      console.log('resetting high')
      high = mid - 1;
    }
  }
  return false
}
// mid 5, h 9, l 0 <-- arr[mid] > target
// 
// var array = [1,2,2,2,2,3,5,6,6,7,8,8,8,9,9]
var array = [0,1,2,3,4,5,6,7,8,9]
console.log(binarySearch(array, 8))