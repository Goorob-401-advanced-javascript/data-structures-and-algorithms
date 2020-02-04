'use strict';

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
  
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  append (value) {
    let node  = new Node(value);
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

  kthFromEnd(k){
    let currentNode = this.head;
    let length = 0;
    while(currentNode){
      length++;
      currentNode = currentNode.next;
    }
    let i = length - 1 - k;
    if(i < 0 || k < 0){
      return 'exception';
    }
    currentNode = this.head;
    while(i > 0){
      i--;
      currentNode = currentNode.next;
    }
    return currentNode.value;
  }

}
module.exports = LinkedList;