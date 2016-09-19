//The autocomplete function will take in an input string 
//and a dictionary array and return the values from the 
//dictionary that start with the input string. If there are 
//more than 5 matches, restrict your output to the first 5 
//results. If there are no matches, return an empty array.

//autocomplete('ai', ['airplane','airport','apple','ball']) = ['airplane','airport']
function autocomple(input, dictionary){
  result = dictionary;
  for(var i = 0; i<input.length; i++){
    for(var j = 0; j<dictionary.length; j++){
      if(input[i] !== dictionary[j][i]){

      }
    }
  }
}