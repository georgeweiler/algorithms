var Range = function(start, end, step) {
  this.storage = [];
  if(start === undefined){this.storage = null};
  if(end === undefined){this.storage = [start]}
  if(step === undefined){step = 1}

  if(step < 0){ // decrement by step
    for(var i = start; i >= end; i = i + step){
      this.storage.push(i)
    }
  }
  else if(start > end && step === 1){
    for(var i = start; i >= end; i--){
      this.storage.push(i)
    } 
  }
  
  else {
    for(var i = start; i <= end; i+=step){
      this.storage.push(i)
    }
  }
};

Range.prototype.size = function () {
  return this.storage.length
};

Range.prototype.each = function (callback) {
  this.storage.forEach(callback)
};

Range.prototype.includes = function (val) {
  return this.storage.indexOf(val) !== -1
};


    var countdown = new Range(10, 0);
    var elements = [];
    countdown.each(function(val){
      elements.push(val);
    });
    console.log(elements)

    //elements.should.eql([10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0]);