'use strict';
// eslint-disable-next-line no-unused-vars
const findRepeatedWord = require('./repeatedWord.js');

describe(`Repeated words`, () => {
      
  it('there is repeated word ', () => {
    let str = 'hello you hello';
    expect(findRepeatedWord(str)).toEqual('hello');
  });

  it('', () => {
    let str = 'hello worlds';
    expect(findRepeatedWord(str)).toEqual('no match');
  });

 
});