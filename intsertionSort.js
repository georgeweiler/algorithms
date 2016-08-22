var arr = [3, 4, 1,2,1,0];

function sorter(array){
  for(var i = 0; i<array.length; i++){
    for(var j = i+1; j<array.length; j++){
      if (array[i] > array[j]){
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
      }
    }
  }
  return array
}

console.log(sorter(arr))