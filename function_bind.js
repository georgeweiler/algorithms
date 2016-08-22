var bind = function(func, context){
  //Your code here
  var params = Array.prototype.slice.call(arguments).splice(2)
  console.log(params);
  return function(){
    return func.apply(context, params)
  }
};  


function identity(param){
  return param
}


var bindedIdentity = bind(identity, null, "foo")
var result = bindedIdentity()

console.log(result)