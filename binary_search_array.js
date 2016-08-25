// Given a sorted array of integers, find the index of a target value using a binary search algorithm.
let binarySeachArray = function(arr, target){
  var start = 0;
  var end = arr.length -1;
  while (start <= end){
    let pivotIdx = Math.floor((start + end) /2);
    console.log(arr[pivotIdx])
    if(arr[pivotIdx] === target){ return pivotIdx }
    arr[pivotIdx] < target ? start = pivotIdx -1 : end = pivotIdx -1;
  } 
  return -1
}
