var bubbleSort = function(array) {
  for(var j = 0; j<array.length; j++){
    for(var i = 0; i<array.length; i++){
      let first = array[i]
      let second = array[i+1]
      if(first > second){
        let temp = first;
        array[i] = second;
        array[i+1] = temp;
      }
    }
  }
  return array 
};