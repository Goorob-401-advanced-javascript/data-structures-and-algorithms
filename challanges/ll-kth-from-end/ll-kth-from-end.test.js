'use strict';
const  LinkedList = require('./ll-kth-from-end.js');
describe('Linked list  Module',()=>{
  it ('constructor',()=>{
    let list = new LinkedList();
    expect(list.head).toBeNull();
  
  });
  it('append ()',()=>{
    let ll = new LinkedList();
    let initVal = '1';
    ll.append(initVal);
    expect(ll.head.value).toEqual(initVal);
    expect(ll.head.value.next).toBeAnObject;
    let secondVal = '2';
    ll.append(secondVal);
    expect(ll.head.value).toEqual(initVal);
    expect(ll.head.next.value).toEqual(secondVal);
  
  });
  it('Where k is greater than the length of the linked list',()=>{
    let ll = new LinkedList();
    ll.append(1);
    ll.append(3);
    expect(ll.kthFromEnd(5)).toMatch('exception');
  
  });
  it('Where k and the length of the list are the same',()=>{
    let ll = new LinkedList();
    ll.append(1);
    ll.append(3);
    expect(ll.kthFromEnd(2)).toMatch('exception');
  });
  it('Where k is not a positive integer',()=>{
    let ll = new LinkedList();
    ll.append(1);
    ll.append(3);
    expect(ll.kthFromEnd(-2)).toMatch('exception');
  });
  it('Where the linked list is of a size 1',()=>{
    let ll = new LinkedList();
    ll.append(5);
    expect(ll.kthFromEnd(1)).toMatch('exception');
  });
  it('“Happy Path” where k is not at the end, but somewhere in the middle of the linked list',()=>{
    let list = new LinkedList();
    list.append(1);
    list.append(3);
    list.append('5');
    list.append(7);
    list.append(9);
    expect(list.kthFromEnd(2)).toMatch('5');
  });
});