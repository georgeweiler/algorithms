var DIGIT_VALUES = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000
};

function translateRomanNumeral(numeral){
  if(numeral === "") {return 0}
  var arr = numeral.split("");
  result = []
  realResult = 0 
  arr.forEach(function(letter){
    if(letter in DIGIT_VALUES){
      result.push(DIGIT_VALUES[letter])
    }
    else{
      result.push(null)
    }
  })
  if(result[0] === null) {return null}

  for(var i = 0; i<arr.length; i++){
    var current = DIGIT_VALUES[arr[i]];
    var previous = DIGIT_VALUES[arr[i - 1]]

    if(previous === undefined) realResult += 0
    else if(previous < current){
      var temp = current - previous;
      console.log('temp', temp)
      result += temp;
    }
    else realResult += current  
    }
    return realResult
}
console.log(translateRomanNumeral("IV")) //1910









