'use strict';
const validatior = require('../challange/array-shift/array-shift.js')
describe('Validator Module', () => {
    it('validate if return a new array that added the value to it middle ', () => {
        let arr = validatior([3, 4, 5, 6, 8, 7], 6);
        expect(arr[3]).toEqual(6)
    })
})

it('validate the array length after adding ', () => {
    expect(validatior([1, 2, 3, 4, 5], 6).length).toEqual(6)
})  
