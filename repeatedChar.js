function firstNonRepeatedCharacter (string) {
  var obj =  string.split("").reduce(function(acc, cur){
    !acc[cur] ? acc[cur] = 1 : acc[cur]++
    return acc
  },{})
  for(var letter in obj){
    if(obj[letter] === 1){
      return letter
    }
  }
  return "sorry"
}

console.log(firstNonRepeatedCharacter("bbfllaahh"))