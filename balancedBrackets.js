// Given a string, return true if it contains all balanced parenthesis (), curly-brackets {}, and square-brackets [].
function isBalanced (str) {
  let bracketMatcher = {
    "[" : "]",
    "(": ")",
    "{" : "}"
  }
  let stack = [];

  for(var i = 0; i<str.length; i++){
    let char = str[i]
    if( char in bracketMatcher ){
      stack.push(str[i]);
    }

    if(char == "]" || char === ")" || char === "}"){
      if(char === bracketMatcher[stack[stack.length-1]]){
        stack.pop();
      }
      else {
        return false
      }
    }
  }
  return stack.length === 0
}

console.log(isBalanced("([hel[lo])"))