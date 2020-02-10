'use strict';
const multiBracketValidator = require('./multi-bracket-validation.js');
describe(' test multi bracket validator function ' , ()=>{
  let str1 = '{([])}';
  let str2 = '([{])';
  it('return true if all brackets are matched', ()=>{
    expect(multiBracketValidator(str1)).toBeTruthy(); 
  });
  it('return false if the brackets aren\'t matched', ()=>{
    expect(multiBracketValidator(str2)).toBeFalsy(); 
  });
});