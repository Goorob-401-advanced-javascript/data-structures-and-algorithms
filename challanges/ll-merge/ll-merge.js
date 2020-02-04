'use strict';


class Node{
  constructor(value){
    this.value = value;
    this.next = null;
  }

}
module.exports = Node;
class LinkedList {
  constructor(){
    this.head = null;
  }
  insert (value){
    let node = new Node(value);
    if(!this.head){
      this.head = node;
      return this;
    }
    let currentNode = this.head;
    while(currentNode.next){
      currentNode = currentNode.next;
    }
    currentNode.next = node;
    return this;
  }

  mergeLLs(theFirstLL, theSecondLL){
    let theFirstCurrentNode = theFirstLL.head;
    let theSecondCurrentNode = theSecondLL.head;
    while(theFirstCurrentNode || theSecondCurrentNode){
      if(theFirstCurrentNode){
        this.insert(theFirstCurrentNode.value);
        theFirstCurrentNode = theFirstCurrentNode.next;
      }
      if(theSecondCurrentNode){
        this.insert(theSecondCurrentNode.value);
        theSecondCurrentNode = theSecondCurrentNode.next;
      }

    }
    return this;
  }

}
module.exports = LinkedList;