// Implement a function that finds the longest palindrome in a given string. For example,
//  in the string “My dad is a racecar athlete”, the longest palindrome is “a racecar a”. 
//  Count whitespaces as valid characters. Other palindromes in the above string include 
//  “dad”, “ete”, “ dad “ (including whitespace on each side of dad).



function palindromeChecker(str) {
    return str == str.split('').reverse().join('');
}

var longestPalindrome = function(string){
  for(var i = string.length; i>0; i--){
    var substring = string.substring(0, i);
    return palindromeChecker(substring);
  }
};

  


