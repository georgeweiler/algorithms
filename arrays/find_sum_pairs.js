//Find pairs in an integer array whose sum is 
//equal to a target (bonus: do it in linear time)

function pairs(array, target){
  var result = [];
  array.sort();
  var low = 0, high = array.length-1;
  while(low<high){
    var sum = array[low] + array[high];
    if(sum === target) {
      result.push([array[low], array[high]])
      low++;
      high--;
    } else if (sum > target){
      high--;
    } else {
      low++;
    }
  }
    return result
}

console.log(pairs([-1,2,3,-4,5,6,7,8,-9], 10))

