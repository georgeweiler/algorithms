function u(number) {
  var result = [1], x = 0, y = 0;
  for(var i = 0; i < number; i++){
    x = result[i]*2 + 1;
    y = result[i]*3 + 1;
    if(x < result[result.length-1]){
      var temp = result.pop();
      result.push(x);
      result.push(temp);
    } else {
      result.push(x);
      result.push(y);
    }
  }
  return result;
}
// console.log(u(20))

