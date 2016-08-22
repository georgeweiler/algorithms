var phoneLetters = {
  0: [0],
  1: [1],
  2: ["A","B","C"],
  3: ["D","E","F"],
  4: ["G","H","I"],
  5: ["J","K","L"],
  6: ["M","N","O"],
  7: ["P","Q","R","S"],
  8: ["T","U","V"],
  9: ["W","X","Y", "Z"],
}


function telephoneWords(digits){
  var counter = 0
  var arr = digits.split("")
  var results = ["","","",""];
  function innerFunc(count){
    if(counter === digits.length){
      return null
    }
    for(var i = 0; i<results.length; i++){
      for(var j = 0; j<phoneLetters[arr[i]].length; j++ ){
        results[i] += arr[j]
      } 
    }
  counter--;  
  }
  innerFunc(counter)
  return results
}





console.log(telephoneWords('0002'))