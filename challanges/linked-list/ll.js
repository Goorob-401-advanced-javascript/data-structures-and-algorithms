'use strict';

const Node = require('./node.js');

class LinkedList {
  constructor() {
    this.head = null;
  }

  insert(value) {
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

  includes(value){
    let node = new Node (value);
    if(!this.head){
      this.head = node;
    }
    let currentNode = this.head;
    while(currentNode){
      if(currentNode.value === value){
        currentNode = currentNode.next;
        return true;
      }else {
        currentNode = currentNode.next;
      }
    }
    return false;


  }

  toString(){
    let currentNode = this.head;
    let string = '';
    while(currentNode){
      string += `${currentNode.value} -> `;
      currentNode = currentNode.next;
    }
    return string += `NULL`;
  }

}


module.exports = LinkedList;