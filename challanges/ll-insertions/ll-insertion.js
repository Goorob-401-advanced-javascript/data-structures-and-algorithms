'use strict';

class Node{
  constructor(value){
    this.value = value;
    this.next = null;
  }
}
class LinkedList {
  constructor(){
    this.head = null;
  }
  append (value){
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
  insertBefore(value, newVal){
    let node = new Node(newVal);
    let currentNode = this.head;
    let firstNode = null;

    while(currentNode){
      if(currentNode.value === value){
        if(firstNode === null){
          this.head = node;
        }else{
          firstNode.next = node;
        }node.next = currentNode;
        break;
      }
      firstNode = currentNode;
      currentNode = currentNode.next;
    }
  }
  insertAfter(value,newVal){
    let newNode = new Node(newVal);
    let currentNode = this.head;
    let nextValue = null;
    while(currentNode){
      if(currentNode.value === value){
        nextValue = currentNode.next;
        currentNode.next = newNode;
        newNode.next = nextValue;
      }currentNode = currentNode.next;

    }
  }
}
// let ll =new LinkedList();
// list.append('1');
// list.append('2');
// list.insertBefore('1','3');
// console.log(ll);
module.exports = LinkedList;