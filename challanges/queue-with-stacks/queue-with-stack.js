'use strict';

class PsuedoQueue {

  constructor(){

    this.stack_1 = [];
    this.stack_2 = [];
      
  }
  enqueue(value){
    this.stack_1.push(value);
  }
  dequeue(){
    if(this.stack_1.length === 0){
      return 'null';
    } while (this.stack_1.length > 0) {
      let popFromStack = this.stack_1.pop();
      this.stack_2.push(popFromStack);
    }
     
    while(this.stack_2.length > 0){
      let popFromStack = this.stack_2.pop();
      this.stack_1.push(popFromStack);
    }
    return this.stack_2.pop();
  }
}
module.exports = PsuedoQueue;