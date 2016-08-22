// Write a function that returns a object that represents a 
// virtual DOM element. A virtual DOM element is an object 
// that has tag, attrs, and children attributes.



function vdom (tagName, attrs, content) {
  var result = {
    tag: tagName,
  }
  if(typeof(attrs) === "object"){
    var childrenTags = Object.keys(attrs)
    var containsChildren = false;
    childrenTags.forEach(function(attr){
      if(attr === "children"){
        containsChildren = true;
      }
    })
    if(containsChildren){
      result.attrs = {};
      console.log("attrs: ", attrs)
      result.children = [attrs]
    }
    else {
      result.attrs = attrs;
    }
  }
  else{
    result.attrs = attrs;
  }
  result.children = [content]
  return result
}

console.log(vdom("p",{"tag":"strong", "children": ["yo"]}))
