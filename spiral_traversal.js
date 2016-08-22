// Write a function that accepts a 2-dimensional array (that is, an array containing many 
// same-length arrays), and prints out every value found, but in a spiral from the upper 
// left in to the center.


function spiralTraversal (matrix) {
  var copy = matrix.slice();
  var container = [];
  
  function innerFunc(newMatrix){
  // ----------- TOP ---------------// 
    if(newMatrix.length === 0){
      return container;
    }
    newMatrix[0].forEach(function(item){
      if(item !== undefined){
        container.push(item);
      }
    });
    newMatrix.shift();

  // ----------- RIGHT ---------------// 
    if(newMatrix.length === 0){
      return container;
    }
    for(var i = 0; i< newMatrix.length; i++){
      var innerEl =newMatrix[i];
      if(innerEl[innerEl.length-1] !== undefined){
        container.push(innerEl[innerEl.length-1]);
        innerEl.pop();
      }
    }

  // ----------- BOTTOM ---------------// 
    if(newMatrix.length === 0){
      return container;
    }
    var bottomEl = newMatrix[newMatrix.length-1];
    for(var j = bottomEl.length-1; j>= 0; j--){
      if(bottomEl[j] !== undefined){
        container.push(bottomEl[j]);
      }
    }
    newMatrix.pop();

  // ----------- LEFT ---------------// 
    if(newMatrix.length === 0){
      return container;
    }
    for(var k = newMatrix.length-1; k>0; k--){ 
      var leftEl = newMatrix[k][0];
      if(leftEl !== undefined){
        container.push(leftEl);
        newMatrix[k].shift();
      }
    }

  // ----------- REPEAT ---------------// 
    innerFunc(copy);
  }
  
  innerFunc(copy);
  return container;
}