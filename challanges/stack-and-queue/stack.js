'use strict';

class Stack{
  constructor(){
    this.storage = [];
    this.top = null;
  }

  push(item){
    this.storage.push(item);
    this.top = item;
  }

  pop(){
    let item = this.storage.pop();
    this.top = !this.storage.length ? null : this.storage[this.storage.length-1];
    return item;
  }

  peek(){
    return this.top;
  }
  isEmpty(){
    if(this.storage.length == 0){ return true ;}
  }
}

module.exports = Stack;