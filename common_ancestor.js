var Tree = function(name){
  this.name = name;
  this.children = [];
};

/**
  * add an immediate child
  */
Tree.prototype.addChild = function(child){
  if(!this.isDescendant(child)){
    this.children.push(child);
  }else {
    throw new Error("That child is already a child of this tree");
  }
  return this;
};

Tree.prototype.getClosestCommonAncestor = function(){
  



};

Tree.prototype.getAncestorPath = function(childNode){
  var ancestorPath;
  function recurse(){
    if (this.children.length){
      this.children.forEach.call(this, (function(child){
        currentPath =[];
        currentPath.push(this);
        if(childNode === child){
          currentPath.push(child);
          ancestorPath = currentPath;
        }
        recurse.call(child);
      }));
    }
  }
  recurse.call(this);
  return ancestorPath;
};

/**
  * check to see if the provided tree is already a child of this
  * tree __or any of its sub trees__
  */
Tree.prototype.isDescendant = function(child){
  if(this.children.indexOf(child) !== -1){
    // `child` is an immediate child of this tree
    return true;
  }else{
    for(var i = 0; i < this.children.length; i++){
      if(this.children[i].isDescendant(child)){
        // `child` is descendant of this tree
        return true;
      }
    }
    return false;
  }
};

/**
  * remove an immediate child
  */
Tree.prototype.removeChild = function(child){
  var index = this.children.indexOf(child);
  if(index !== -1){
    // remove the child
    this.children.splice(index,1);
  }else{
    throw new Error("That node is not an immediate child of this tree");
  }
};


var mom = new Tree("mom");
var me = new Tree("me");
mom.addChild(me);



console.log(mom);




console.log(mom.getAncestorPath(me))
// console.log(path);

