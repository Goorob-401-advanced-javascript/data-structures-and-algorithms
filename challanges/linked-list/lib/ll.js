'use strict';

const Node = require('./node.js');

class LinkedList {
  constructor() {
    this.head = null;
  }

  insert(value) {
    let node = new Node(value);



    if (!this.head) {
      this.head = node;
    }
    
    let currentNode = this.head;
    while(currentNode.next) {
      currentNode = currentNode.next
    }

    currentNode.next = node;
    return this;
  }

  includes(value){
      let currentNode = this.head ;
      while (currentNode.next) {
     if(currentNode.next.val === value){
              return true ;
      }
      currentNode = currentNode.next ;
      }
      return false ;
    }

     toString(){
        let finalOutPut = [] ;
        let currentNode = this.head;
        while (currentNode.next) {
          result.push(currentNode.val);
          currentNode = currentNode.next;
        }  
        finalOutPut.push(currentNode.val);
        finalOutPut.push('Null');
        let finalString = finalOutPut.join('->');
         return finalOutPut ;
    }

}


module.exports = LinkedList;