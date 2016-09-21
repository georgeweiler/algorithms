//Write a function getDrinkByProfession that 
//receives as input parameter a string, and 
//produces outputs according to the following table:


//CREDIT: https://www.codewars.com/kata/l1-bartender-drinks/train/javascript
const DRINK_ORDERS = {
  "Jabroni" : "Patron Tequila",
  "School Counselor" : "Anything with Alcohol",
  "Programmer" : "Hipster Craft Beer",
  "Bike Gang Member" : "Moonshine",
  "Politician" : "Your tax dollars",
  "Rapper" : "Cristal"
}

var camelCase = function(string){
  var arr = string.split("");
  arr[0] = arr[0].toUpperCase();
  for(var i = 1; i<arr.length; i++){
    if(arr[i-1] === " "){
      arr[i] = arr[i].toUpperCase();
    }
  }
  return arr.join("")
}

function getDrinksByProfession(str){
  str = camelCase(str);
  return DRINK_ORDERS[str] || "beer";
}

console.log(getDrinksByProfession("Jabroni"))
