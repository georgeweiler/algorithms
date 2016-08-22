// Given a given number of pence, return the possible number of ways someone could make change.
const coins = [1,2,5,10,20,50,100,200]
function coinSums(amount, schema){
  let mainCount = 0;
  for(var i = 0; i<schema.length; i++){
    let counter = amount;
    let tempAmount = amount;
    while(counter > 0) {
      if(schema[i] > amount){
        return "too big"
      }
      if(tempAmount < 0){
        console.log(mainCount)
        mainCount++
        break;
      }
      tempAmount = tempAmount- schema[i];
    counter--;
    }
  }
}
console.log(coinSums(5, coins))