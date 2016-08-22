function primeTester (n) {
  //instant cases:
  if(n ===2) {return true};
  if(n<=1 || n % 2 === 0){return false};


  var factor = Math.sqrt(n);


  for(var i = 2; i<=factor; i++){
    console.log('factor', factor)
    if(n % i === 0){
      return false
    }
  }
  return true
}

console.log(primeTester(15))