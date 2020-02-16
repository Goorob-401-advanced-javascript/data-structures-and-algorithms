'use strict';

class BinaryTree {
  constructor(root = null) {
    this.root = root === null ? null : new Node(root);
  }
  preOrder(){
    let results = [];
    let _walk = (node) => {
      results.push(node.value);
      if(node.left) {
        _walk(node.left);
      }
      if(node.right) {
        _walk(node.right);
      }
    };
    _walk(this.root);
    return results;
  }
  
  inOrder(){
    let results = [];
    let _walk = (node) => {
      if(node.left) {
        _walk(node.left);
      }
      results.push(node.value);
      if(node.right) {
        _walk(node.right);
      }
    };
    _walk(this.root);
    return results;
  }
  
  postOrder(){
    let results = [];
    let _walk = (node) => {
      if(node.left) {
        _walk(node.left);
      }
      if(node.right) {
        _walk(node.right);
      }
      results.push(node.value);
    };
    _walk(this.root);
    return results;
  }
}

class Node {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = right;
    this.right = left;
  }
}

class BinarySearchTree extends BinaryTree {

  add(value){
    if(this.root === null) {
      this.root = new Node(value);
      return;
    }
    this._addtoNode(value, this.root);
  }

  _addtoNode(value, parentNode) {
  
    if(value > parentNode.value){
      if(parentNode.right === null) {
        parentNode.right = new Node(value);
        return;
      } else {
        this._addtoNode(value, parentNode.right);
        return;
      }
    }
    if(value <= parentNode.value){
      if(parentNode.left === null) {
        parentNode.left = new Node(value);
        return;
      } else {
        this._addtoNode(value, parentNode.left);
      }
    }
  }
  
  contains(value){
    return this._containstoNode(value, this.root);  
  }

  _containstoNode(value, parentNode) {
    if (parentNode === null) {
      return false;
    }
    if (parentNode.value === value) {
      return true;
    } else if(parentNode.value < value) {
      return this._containstoNode(value, parentNode.right);
    } else if (parentNode.value >= value) {
      return this._containstoNode(value, parentNode.left);
    }
  }
}




module.exports = {BinarySearchTree, BinaryTree, Node};