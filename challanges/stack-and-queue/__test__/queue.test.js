'use strict';

const Queue = require('../queue.js');

describe('Queue', () => {
  it('add item to the end ', () => {
    let queue = new Queue();
    queue.enqueue('shoroq');
    queue.enqueue('goorob');
    queue.enqueue('duha');
    expect(queue.front).toEqual('shoroq');
    expect(queue.rear).toEqual('duha');

  });

  it('remove from the front ', () => {
    let queue = new Queue();
    queue.enqueue('shoroq');
    queue.enqueue('goorob');
    queue.enqueue('duha');
    let item = queue.dequeue();
    expect(item).toEqual('shoroq');
    expect(queue.front).toEqual('goorob');
    expect(queue.rear).toEqual('duha');
    queue.dequeue();
    queue.dequeue();
    expect(queue.dequeue()).toBeNull();
    expect(queue.front).toBeNull();
    expect(queue.rear).toBeNull();
  });
  describe('isEmpty()' , ()=> {
    let queue = new Queue();
    expect(queue.isEmpty()).toBeTruthy();
  });
});