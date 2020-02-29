  
'use strict';
// eslint-disable-next-line no-unused-vars
const quickSort = require('./quickSort.js');

describe(`quick sort`, () => {
      
  it('sort an array', () => {
    const arr = [5,2,8,4,6,7];
    expect(quickSort(arr, 0, arr.length-1)).toEqual([2,4,5,6,7,8]);
  });

  it(' sort an array with duplicate values', () => {
    const arr = [5,2,8,4,6,7,6];
    expect(quickSort(arr, 0, arr.length-1)).toEqual([2,4,5,6,6,7,8]);
  });

});