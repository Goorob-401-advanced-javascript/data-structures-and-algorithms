'use strict';

const Stack = require('../stack.js');

describe('Stack', () => {
  describe('push()', () => {
    it('(add) push an item', () => {
      let stack = new Stack();
      expect(stack.peek()).toBeNull();
      stack.push('Instance');
      expect(stack.peek()).toEqual('Instance');
      stack.push('Sally');
      expect(stack.peek()).toEqual('Sally');
    });
  });

  describe('pop()', () => {
    it('remove the top item ', () => {
      let stack = new Stack();
      stack.push('shoroq');
      stack.push('goorob');
      stack.push('duha');
      let item = stack.pop();
      expect(item).toEqual('duha');
      stack.pop();
      item = stack.pop();
      expect(item).toEqual('shoroq');
      console.log(stack);
      expect(stack.peek()).toBeNull();
    });
  });
  describe('peek()', ()=> {
    it('rturn top of stack', () => {
      let stack = new Stack();
      stack.push('shoroq');
      expect(stack.peek()).toEqual('shoroq');
    });
  });
  describe('isEmpty()' , ()=> {
    it('should be empty' , () =>{
      let stack = new Stack();
      expect(stack.isEmpty()).toBeTruthy();
    });
  });
});