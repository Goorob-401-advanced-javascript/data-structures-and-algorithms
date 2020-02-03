// 'use strict';

const Node = require('./node.js');

describe('Node Module', () => {
  it('constructor', () => {
    let value = 'some value';
    let node = new Node(value);
    expect(node.next).toBeNull();
  });
});
