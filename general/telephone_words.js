/*
* Write a function that takes up to four digits of a phone number, 
* and returns a list of all of the words (in alphabetical order) that 
* can be written on the phone with that number. (You should return 
* all permutations, not only English words.)
*/ 

// Example: "1123" --->  [ "11AD", "11AE", "11AF", "11BD", "11BE", "11BF", "11CD", "11CE", "11CF" ]

/* ----- global helper object ---- */
var letterMap = {
  0: '0',
  1: '1',
  2: 'ABC',
  3: 'DEF',
  4: 'GHI',
  5: 'JKL',
  6: 'MNO',
  7: 'PQRS',
  8: 'TUV',
  9: 'WXYZ'
};
/* ------------------------------- */

function tele(num){
  var result = []
  function recurse(word, digits){
    if(digits.length === 0){
      result.push(word);
      return
    }
    var letterOptions = letterMap[digits[0]];
    var remainingDigits = digits.slice(1);
    for(var i = 0; i < letterOptions.length; i++){
      recurse(word + letterOptions[i], remainingDigits)
    }
  }
  recurse("", num)
  return result
}