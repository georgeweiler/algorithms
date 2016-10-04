//convert an integer less than 1 million to english words

let ones = ["","one","two","three","four","five","six","seven","eight","nine"]
let teens = ["ten", "eleven","twelve","thirtheen","foutreen","fifteen","sixteen","seventeen","eighteen","nineteen"]
let tens = ["","","twenty","thirty","fourty","fifty","sixty","seventy","eighty","ninety"]

function numToWords(num){
  if(num < 20 ){
    return LT20(num);
  }
  if(num < 100){
    return LTHundred(num);
  }
  if(num < 1000){
    return LTThousand(num);
  }
  if(num < 1000000){
    return LTMillion(num);
  }
}

function LT20(num){
 if (num === 0 ) {
    return "zero"
  };
  if (num < 10) {
    return ones[num];
  }
  if (num >= 10 && num < 20){
    return teens[num -10]
  }
  else return null;
}

function LTHundred(num){
  return tens[Math.floor(num/10)] + " " + ones[num%10];
}

function LTThousand(num){
  return ones[Math.floor(num/100)] + " hundred " + LTHundred(num%100);
}
function LTMillion(num){
  return ones[Math.floor(num/1000)] + " thousand " + LTThousand(num%1000);
}


