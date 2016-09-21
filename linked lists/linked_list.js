class Node {
  contructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(){
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(value) {
    var node = new Node(value);
    this.length++;
    if(!this.head) {
      this.head = node;
    } else {
      this.tail.next = node;
    }
    this.tail = node;
  }

  pop(){
    //returns the last value of the list
  }

  _find(value){
    if(!this.head) {
      return null;
    }
    if (this.head.next === null){
      return this.head.next === value ? this.head.next : null;
    }
    var current = this.head;
    while(current){
      if(current.value === value){
        return current;
      }
      current = current.next;
    }
    return null;
  }

  delete(){
  
  }

}

var myList = new LinkedList
myList.push(1)
myList.push(2)
myList.push(3)
myList.push(4)
console.log(myList._find(3))