
nthFibonacci = function(n) {  
  var prevNum;
  var result = 0;
  var curNum = 1;
  for(n; n>0; n--){
    prevNum = result;  
    result = curNum;
    curNum = curNum + prevNum;
  }
  return result
};
