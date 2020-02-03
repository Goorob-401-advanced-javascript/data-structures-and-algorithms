'use strict' ;

const LinkedList = require('./ll.js') ;






describe('Linked List' , ()=>{
  it ('at the first the head is null',() =>{
    let ll =new LinkedList();
    expect(ll.head).toBeNull();
  });
  it('insert()',()=>{
    let ll = new LinkedList ();
    ll.insert('hello');
    expect(ll.head.value).toBeUndfined;
    expect(ll.head.next).toBeNull;
  });
  it ('includes()',()=>{
    let value = 'test';
    let list = new LinkedList();
    list.insert(value);
        
    expect(list.includes(value)).toEqual(true);
  });
  it('toString()',()=>{
    let list = new LinkedList();
    let initVal= 'initVal';
    list.insert(initVal);
    let secondVal = 'secondVal';
    list.insert(secondVal);
    expect(list.head.value).toEqual(initVal);
    expect(list.head.next).toBeAnObject;
    expect(list.toString()).toMatch('initVal -> secondVal -> NULL');
  });
});

