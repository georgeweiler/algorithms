var mostFrequent = function(arr){
  var largestCount = 0;
  var mostFrequentEl = "";
  var map = arr.reduce(function(mapSoFar, cur){
    if (mapSoFar[cur]) { 
      mapSoFar[cur]++;
      if(mapSoFar[cur] >= largestCount){
        largestCount = mapSoFar[cur];
        mostFrequentEl = cur;
      } 
    } else { 
      mapSoFar[cur] = 1; 
    }
    return mapSoFar;
  }, {})
  return mostFrequentEl;
}
console.log(mostFrequent([1,2,3,4]))