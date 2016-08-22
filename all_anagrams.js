// Given a single input string, write a function that produces all possible anagrams of a string 
// and outputs them as an array. At first, don’t worry about repeated strings. What time complexity 
// is your solution?


function allAnagrams (string) {
  var chars = string.split("")
  var result = []
  var storage = []
  var recursivePermutation = function(lettersRemaining, anagram){
    if(lettersRemaining === 0){ //base case
      storage.push(anagram);
      return;
    }
    chars.forEach(function(item){
      console.log('item', item)
      console.log('anagram', anagram)
    
      recursivePermutation(lettersRemaining -1, anagram.concat(item));
  
    })
  }
  recursivePermutation(chars.length,[]); //starting point
  
  storage.forEach(function(anagramArray){
    result.push(anagramArray.join(""))
  })
  return result
}
console.log(allAnagrams("abc"))

