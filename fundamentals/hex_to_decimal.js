//with parseInt
let parseHexToDex = (input)=> parseInt(input, 16);
 
//without parseInt: 
function hexToDec(hexString) {
  const hexMap = {
   "a" : 10,
   "b" : 11,
   "c" : 12,
   "d" : 13,
   "e" : 14,
   "f" : 15,
  }
  return hexString.split("").reverse().reduce(function(sum, digit, i){
    if (digit==="-") { 
      return -1*sum
    } else {
      digit = hexMap[digit.toLowerCase()] || digit
      return sum += (Number(digit) * Math.pow(16, i))
    }
  }, 0);
}
