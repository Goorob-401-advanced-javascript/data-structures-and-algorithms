'use strict';
const interSection = require('./tree-intersection.js');
const Node = require('./node.js');

describe('tree intersection', () => {

  let tree1 ;
  let tree2 ;
  beforeEach(()=> {

    tree1 = {head: null};
    let a = new Node(1) ;
    let b = new Node(2) ;
    let c = new Node(3) ;
    let d = new Node(4) ;
    let e = new Node(5) ;
    tree1.head =a ;
    a.left = b ;
    a.right =c ;
    c.left = d ;
    c.right = e ;

    tree2  = {head: null};
    let f = new Node(1) ;
    let g = new Node(2) ;
    let h = new Node(3) ;
    tree2.head = a ;
    f.left = g;
    f.right = h;
  });
  it('Return Array of repeated values',()=>{
    expect(interSection(tree1 , tree1)).toEqual([1,2,3,4,5]);
  });

});