// sort an array of integers by swapping adjacent elements if they are out of place

//Double Loop Solution
function bubbleSortLoop(array){
  for(var i = 0; i < array.length-1; i++){
    for(var j = 0; j < array.length; j++){
      if(array[j] > array[j+1]){
        var temp = array[j];
        array[j] = array[j+1];
        array[j+1] = temp; 
      }
    }
  }
  return array
}

//Recursive Solution
function bubbleSortRecursive(array){
  count = 0;
  for(var i = 0; i<array.length-1; i++){
    if(array[i] > array[i+1]){
        var temp = array[i];
        array[i] = array[i+1];
        array[i+1] = temp; 
        count++;
      }
  }
  if(count != 0){bubbleSortRecursive(array)} 
  return array
}
console.log(bubbleSortRecursive([6,1,3,7,9,2,0]))