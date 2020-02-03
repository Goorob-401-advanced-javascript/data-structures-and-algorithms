const LinkedList = require('./ll-insertion.js');

describe('LL Module',()=>{
  it ('constructor',()=>{
    let list = new LinkedList();
    expect(list.head).toBeNull();

  });

  it('append()',()=>{
    let ll = new LinkedList();
    
    ll.append('1');
    expect(ll.head.value).toEqual('1');
    expect(ll.head.value.next).toBeAnObject;
  });

  it('insertBefore()',()=>{
    let ll = new LinkedList();
    let initVal = '1';
    ll.append(initVal);
    ll.insertBefore(initVal,'2');
    expect(ll.head.value).toEqual('2');
  });

  it('insertAfter()',()=>{
    let ll = new LinkedList();
    let initVal = '1';
    ll.append(initVal);
    ll.insertAfter(initVal,'2');
    expect(ll.head.value).toEqual('1');
    expect(ll.head.value.next).toBeAnObject;
  });

});