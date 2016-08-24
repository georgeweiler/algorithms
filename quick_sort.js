//QUICK SORT
/*
Quicksort uses these steps.
1. Choose any element of the array to be the pivot. There are multiple ways of selecting a pivot; explore the options and note their advantages.
2. Divide all other elements (except the pivot) into two partitions.
3. All elements less than the pivot must be in the first partition.
4. All elements greater than the pivot must be in the second partition.
5. Recursively apply the above process to the two partitions
6. Join the first sorted partition, the pivot, and the second sorted partition.
*/

function quickSort(array){
  if(array.length === 0 ){
    return []
  }
  let pivot = array[array.length-1]; // pivot is last item in the array
  let left = [];
  let right = [];
  for(var i = 0; i<array.length - 1; i++){
    array[i] < pivot ? left.push(array[i]) : right.push(array[i])
  }
  return quickSort(left).concat(pivot, (quickSort(right)))
}
console.log(quickSort([5,4,3,2,6,5,4,0,8,6,7,5,4,9]))
