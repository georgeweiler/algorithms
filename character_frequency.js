//Write a function that takes as its input a 
//string and returns an array of arrays as shown 
//below sorted in descending order by frequency and then by ascending order by character.

function characterFrequency(string){
  var result = []
  var inventory = string.split("").reduce(function(inventoryObj, letter){
    !inventoryObj[letter] ? inventoryObj[letter] = 1 : inventoryObj[letter]++  
    return inventoryObj;
  },{})
  for(var key in inventory){
    result.push([key, inventory[key]]);
  }
  return result.sort(function(a,b){
    if (a[1] === b[1]){
      if(a[0] < b[0]){return -1}
      if(a[0] > b[0]){return 1}

    }
    else{
      return b[1] - a[1]
    }
  })
};

console.log(characterFrequency("popopo"))


