'use strict';
// eslint-disable-next-line no-unused-vars
const mergeSort = require('./mergeSort.js');

describe(`Merge sort`, () => {
      
  it(' sort an unsorted array', () => {
    const testArr = [7,3,5,9,10,2];
    expect(mergeSort(testArr)).toEqual([2,3,5,7,9,10]);
  });

  it(' sort an unsorted array with duplicate values', () => {
    const testArr = [8,9,4,8,7,2,3];
    expect(mergeSort(testArr)).toEqual([2,3,4,7,8,8,9]);
  });
});