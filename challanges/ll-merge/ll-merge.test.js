
'use strict';

const LinkedList = require('./ll-merge.js');


describe('LinkedList Module',()=>{
  it ('constructor',()=>{
    let ll = new LinkedList();
    expect(ll.head).toBeNull();

  });
  it('insert()',()=>{
    let ll = new LinkedList();
    let initVal = 'first value';
    ll.insert(initVal);
    expect(ll.head.value).toEqual(initVal);
    expect(ll.head.value.next).toBeAnObject;
  
  });
  it('merge()',()=>{
    let ll = new LinkedList();
    const theFirstLL = new LinkedList();
    const theSecondLL = new LinkedList();
    theFirstLL.insert(1);
    theSecondLL.insert(2);
    theFirstLL.insert(3);
    theSecondLL.insert(4);
    ll.mergeLLs(theFirstLL,theSecondLL);
    expect(ll.head.next.value).toEqual(2);

  });
});