let sumArray = (array) => {
  array.sort((a,b) => a-b).shift();
  array.pop();
  return array.reduce((sum, curr) => sum+=curr,0)
}

console.log(sumArray([6,2,9,2,1,9,0]))