
deepEquals = function(obj1, obj2){
  for(var prop in obj1){
    if(typeof(obj1[prop]) !== "object"){
      return false;
    }
    if(!deepEquals(obj1[prop], obj2[prop])){
      return false
    } 
  }
  return true;
};  

var a = { b: { c: { d: { e: 'potato' } } }, foo: 1 };
var b = { foo: 1, b: { c: { d: { e: 'potato' } } } };
console.log(deepEquals(a,b))