'use strict' ;

const linkedList = require('../lib/ll.js') ;
describe('Linked List' , ()=>{
    it ('at the first the head is null',() =>{
        let ll =new linkedList();
        expect(ll.head).toBeNull();
    })
    it('check in that insert a value' ,() =>{
       let ll = new linkedList();
       ll.insert(4);
       expect(ll.insert(4).toEqual(4));
    })
})




