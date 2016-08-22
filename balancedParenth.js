var string = "hello"


function balanced(string){
  var isBalanced = false;
  var splitString = string.split("");
  var innerFunc = function(array){
    if(array.length === 0 || 1){
      isBalanced = true;
      return;
    }
    if(array[0] === "("){
      console.log('we have a parens')
      if(array[array.length -1 !== ")"]){
        return
      }
      splitString.shift();
      splitString.pop();
      innerFunc(splitString);
    }
    //isBalanced = true;
  }
  innerFunc(splitString);
  return isBalanced
}