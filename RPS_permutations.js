//return all possible perumtations of RPS for a given round count
//0 : []
//1 : ["r", "p", "s"]
//2 : [ "rr", "rp", "rs", "pr", "pp", "ps", "sr", "sp", "ss" ]

function rpsPermutations(countNum){
  var rps = ["r", "p", "s"];
  var storage = [];
  var results = [];
  if(countNum === 0){
    return [];
  }
  if(countNum === 1){
    return rps;
  }
  
  var recursivePermutation = function(roundsRemaining, resultSoFar){
    if(roundsRemaining === 0){ //base case
      storage.push(resultSoFar);
      return;
    }
    rps.forEach(function(item){
      recursivePermutation(roundsRemaining -1, resultSoFar.concat(item));
    })
  }
  recursivePermutation(roundCount,[]); //starting point
  
  storage.forEach(function(index){ //fix weird output by joining each mini array 
    results.push(index.join(""));
  })
  
  return results
}