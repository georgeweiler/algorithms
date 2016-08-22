var mixEvents = function(obj) {

  obj.events = {
    green-light: [function(){floor it}, function]
  };

  obj.trigger = function (eventArray) {
    var slicedArgs = Array.prototype.slice.call(arguments, 1);
    if(obj.events[eventArray]){
      obj.events[eventArray].forEach(function(event){
        event.apply(null, slicedArgs);
      })
    };
  };

  obj.on = function (event, callback) {
    if(!obj.events[event]){ obj.events[event] = [callback]}
    else{ obj.events[event].push(callback)}
  };

  return obj
};



