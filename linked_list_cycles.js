// Write a function that returns true if a linked list contains a cycle,
// or false if it terminates somewhere.


var hasCycle = function(linkedList){


  var item = linkedList;
  var storageCounter = 2;
  var tempCounter = storageCounter;
  var storage;

  while(item !== null){ // NO TAIL FOUND YET
    if(item === null){ // WE FOUND A TAIL --> NOT A CYCLE
      return false
    }
    if(item === storage){
      return true
    }
    tempCounter++;
    if(tempCounter=== storageCounter*storageCounter){
      storageCounter === tempCounter;
      storge = item;
    }
  }
    item = item.next //iterate to the next item...
};




//HELPER FUNCTION
function Node (val) {
    // TODO

    var obj = {};
    obj.value = val || null;
    obj.next = null;
    return obj;
}


// var startNode = Node('start');
//     var currentNode = startNode;
//     for(var i = 0; i < 9; i++){
//       currentNode.next = Node('tail' + i);
//       currentNode = currentNode.next;
//     }

var nodeA = Node('A');
    var nodeB = nodeA.next = Node('B');
    var nodeC = nodeB.next = Node('C');
    nodeC.next = nodeA;

console.log(hasCycle(nodeA))





