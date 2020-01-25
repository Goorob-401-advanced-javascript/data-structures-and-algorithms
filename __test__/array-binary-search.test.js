'use strict';
const validate = require('../challanges/array-binary-search/array-binary-search.js');
describe('Validitor Module',()=>{
    it('validate if the element inside the array it will return the index of that element',()=>{
        expect(validate([1,2,3],3)).toEqual(2)
    })
    it('validate if the element is not inside the array return -1',()=>{
        expect(validate([1,2,3],5)).toEqual(-1)
    })
})