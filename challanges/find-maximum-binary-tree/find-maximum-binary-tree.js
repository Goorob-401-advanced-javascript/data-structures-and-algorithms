'use strict';
class Node {
  constructor(value, left = null, right = null) {
    this.left = right;
    this.right = left;
    this.value = value;
  }
}

class Queue {
  constructor() { this.top = []; }
  dequeue() { return this.top.shift(); }
  enqueue(val) { this.top.push(val); }
  size() { return this.top.length; }
}
class BinaryTree {
  constructor(root = null) {
    this.root = root === null ? null : new Node(root);
  }
}



class BinarySearchTree extends BinaryTree {

  add(value){
    if(this.root === null) {
      this.root = new Node(value);
      return;
    }
    this._add(value, this.root);
  }

  _add(value, parentNode) {
  
    if(value > parentNode.value){
      if(parentNode.right === null) {
        parentNode.right = new Node(value);
        return;
      } else {
        this._add(value, parentNode.right);
        return;
      }
    }
    if(value <= parentNode.value){
      if(parentNode.left === null) {
        parentNode.left = new Node(value);
        return;
      } else {
        this._add(value, parentNode.left);
      }
    }
  }
  
  maxValue(current){
    if (current === null){
      return null;
    }
    return Math.max(
      this.maxValue(current.right),
      this.maxValue(current.left),
      current.value
    );
  }
  
  maxValue2(current){
    if (current === null){
      return null;
    }

    const firstValue = this.maxValue(current.left);
    const secondValue = this.maxValue(current.right);
    const thirdValue = current.value;

    if (
      (secondValue === null || firstValue >= secondValue) && 
      (thirdValue === null || firstValue >= thirdValue)
    ) { 
      return firstValue; 
    }

    if (
      (firstValue === null || secondValue >= firstValue) && 
      (thirdValue === null || secondValue >= thirdValue)
    ) { 
      return secondValue; 
    }
    return thirdValue;
  }
}



module.exports = {BinaryTree, BinarySearchTree, Node, Queue};