'use strict';

let validator = require('../code-challange4.js');
describe('Fibonacci Module',()=>{
  it('validate  the output arr  ' ,()=> {
    expect(validator(8)).toEqual( 21 )
  });
})
