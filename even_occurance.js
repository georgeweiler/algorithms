var testArr = [ 1, 3, 3, 3, 4, 4, 2, 5];
var evenOccurance = function(array){
  var elCount = array.reduce(function(start, el){
    start[el] ? (start[el]++) : start[el] = 1;
    return start
  },{})

  for(var el in elCount){
    if(elCount[el]  % 2 === 0){
      return Number(el) == el ? Number(el) : el
    }
  }
  return null
}