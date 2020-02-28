'use strict';

// eslint-disable-next-line no-unused-vars
const {BinarySearchTree, BinaryTree, Node, Queue} = require('./find-maximum-binary-tree.js');


describe(`binaryTree max value`, () => {
      
 
  it('Can find the highest value in the tree', () => {
    const tree = new BinarySearchTree(null);
    tree.add(2);
    tree.add(7);
    tree.add(5);
    tree.add(9);
    tree.add(4);
    tree.add(11);
    tree.add(2);
    tree.add(6);
    

    expect(tree.maxValue2(tree.root)).toBe(11);
  });

  
});