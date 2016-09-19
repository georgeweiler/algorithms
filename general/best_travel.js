//Credit: http://www.codewars.com/kata/55e7280b40e1c4a06d0000aa/train/javascript

/*

John and Mary want to travel between a few towns A, B, C ... 
Mary has on a sheet of paper a list of distances between these towns. 
ls = [50, 55, 57, 58, 60]. John is tired of driving and he says to Mary 
that he doesn't want to drive more than t = 174 miles and he will visit 
only 3 towns.

Which distances, hence which towns, they will choose so that the sum of 
the distances is the biggest possible - to please Mary - but less than t - 
to please John- ?

*/


// t = maximum distance
// k = # towns to visit
// ls = list of distances between towns

function chooseBestSum(t,k,ls){
  var sums = [];
  var count = 0;
  function subRoutine(index, sum){
    console.log("-----------")
    console.log(index, sum)
    // console.log(sum, sum.length)
    if(sum.length === k){
      sums.push(sum);
      return;
    }

    for(var i = index; i < ls.length; i++){
      subRoutine(index+1, sum+=ls[i])
    }
  }
  subRoutine(0,"")
  return sums
}

console.log(chooseBestSum(5, 3, ["a","b","c","d"]))