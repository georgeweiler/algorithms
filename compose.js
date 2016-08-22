var compose = function(){
  var params = Array.prototype.slice.call(arguments)
 return function(){
    var innerParams = Array.prototype.slice.call(arguments)
    var temp1 = params[1](params[0](innerParams[0]))
    return temp1
  }
}



var greet = function(name){ return 'hi: ' + name;}
var exclaim = function(statement) { return statement.toUpperCase() + '!';}
var welcome = compose(greet, exclaim);
console.log(welcome('phillip')); //=> 'hi: PHILLIP!'