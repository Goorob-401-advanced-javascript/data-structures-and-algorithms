'use strict';
const PseudoQueue = require('./queue-with-stack.js');
let pseudoQueue = new PseudoQueue();

describe('Testing queue-with-stacks', () => {
  beforeEach(() => {
    pseudoQueue = new PseudoQueue();
  });
  it('Enqueue values', () => {
    pseudoQueue.enqueue('301');
    pseudoQueue.enqueue('401');
    expect(pseudoQueue.stack_1).toEqual(['301', '401']);
  });
  it('Dequeue values', () => {
    pseudoQueue.enqueue('301');
    pseudoQueue.enqueue('401');
    pseudoQueue.dequeue();
    expect(pseudoQueue.stack_1).toEqual(['301' ,'401']);
  });
});