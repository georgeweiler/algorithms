/* 
sort an array of integers by finding the lowest integer and swapping it with the
integer at the next highest non-sorted index
*/

function selectionSort(array){
  for(var i = 0; i<array.length; i++){
    var min = 99999999
    var minIdx
    //Find Minimum value of non sorted items
    for(var j = i; j<array.length; j++){
      if(array[j] < min){
        minIdx = j;
        min = array[minIdx];
      }
    }
    //swap with next non-sorted item
  var temp = array[i];
  array[i] = min;
  array[minIdx] = temp;
  }
  return array
}

console.log(selectionSort([4,2,7,1,9,2,0,5]))
