function largest(array){
  let largestSoFar = Number.NEGATIVE_INFINITY;
  for(let i = 0; i<array.length; i++){
    for(let k = i+1; k<array.length; k++){
      for(let j = k+1; j<array.length; j++){
        let a = array[i];
        let b = array[k];
        let c = array[j];   
        let product = (a*b*c)
        if(product > largestSoFar){
          largestSoFar = product;
        }
      }
    }
  }
  return largestSoFar;
}

const arr = [-5,-1,-3,-2,-4]
console.log(largest(arr))