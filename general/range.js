//implement _.range

function range(start, end, step){
  let result = [];
  if(end < start) return result;
  if(arguments.length === 1) {
    return range(0, start, 1)
  }
  if(arguments.length === 2) {
    return range(start, end, 1)
  }
  else {
    for(start; start<end; start+=step){
      result.push(start);
    }
  }
  return result;
}

 for (i=0; i<(end-start)/(step||1); i++) {
        ret.push(start+(i*step));
    }



console.log(range(1,4,1))


