'use strict';
const insertionSort = require('./insertionSort.js');
describe('Insertion Sort ' , () => {
  it('unsorted array returns the array sorted ' , ()=> {
    expect(insertionSort([5,6,2,8,1])).toEqual([1,2,5,6,8]);
  });
  it('A sorted array returns the same sorted array' , ()=> {
    expect(insertionSort([1,2,5,6,8])).toEqual([1,2,5,6,8]);
    
  });

});