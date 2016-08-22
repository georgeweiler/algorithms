// Write a function that, given a string, finds the longest run of identical characters and returns an array containing the start and end indices of that run. 
// If there are two runs of equal length, return the first one. Return [0,0] for no runs.
// "abccccccc" [ 2, 8 ]

function fn(str){
  var longestRun = ""
  for(var i=0; i<str.length; i++){
    if(str[i] == str[i-1]){
      runLetter = str[i-1]
      for(var j = i -1; j<str.length; j++){  
        if(str[j] == runLetter){
          longestRun += runLetter
          console.log(longestRun)
        }
      }
    }
  }
}

console.log(fn("aaa"))

