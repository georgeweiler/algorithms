var tree = {val: 1, children: [
    {val: 2, children: [
        {val: 4, children: [
          {val: 8, children: []}
        ]},
        {val: 5, children: []}
      ]},
    {val: 3, children: [
        {val: 6, children: []},
        {val: 7, children: [
          {val: 9, children: []}
        ]}
      ]}
  ]}
var bfs = function(root, predicate){
  var breadth = 0;
  var result = [];
  var queue = [];
  queue.push(root)
    for(var i=0; i<queue.length; i++){
      console.log(queue)
      if(queue[i].children.length > 0){ //not a leaf
        for(var j = 0; j<queue[i].children.length; j++){
          queue.push(queue[i].children[j]);
        }

        if(predicate(queue[j].val, breadth)){
          result.push(queue[j].val)
        }
      }
      breadth++;
    }
    return result
}

console.log(bfs(tree, function(value, breadth){
  console.log(breadth)
  return (breadth === 0) 
}))




