//MERGE SORT

function merge(L, R){
  var i = 0,
  j = 0,
  result = [];
  while(i < L.length && j < R.length){
    // console.log(L[i] + " " + R[j] )
    if(L[i] < R[j]){
      result.push(L[i]);
      i++;
    } else {
      result.push(R[j])
      j++;
    }
  }
  while( i < L.length){
    result.push(L[i])
    i++
  }
  while( j < R.length){
    result.push(R[j])
    j++
  }
  return result;
}

function mergeSort(arr){
    if(arr.length === 1){
      return arr;
    };
    var middleIdx = Math.floor(arr.length/2);
    var left = arr.slice(0, middleIdx);
    var right = arr.slice(middleIdx, arr.length);
    return merge(mergeSort(left), mergeSort(right));
}
console.log(mergeSort([8, 6, 4, 2, 7, 4, 1, 9]))


