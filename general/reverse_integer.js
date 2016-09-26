//reverse an integer:
// -123 ---> -321

var reverse = function(x) {
  let isNegative = x < 0;
  let result = Math.abs(x).toString().split("").reverse();
  if(isNegative) {
    result.unshift("-")
  };
  return Number(result.join(""));
};