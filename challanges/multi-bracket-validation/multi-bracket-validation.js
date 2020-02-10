'use strict ' ; 
// used the this website to solve this problem : https://medium.com/@paulrohan/parenthesis-matching-problem-in-javascript-the-hacking-school-hyd-7d7708278911
let multiBracketValidation = (str) => {
  let stack = [];

  let bracketOpener = {
    '{': '}',
    '[': ']',
    '(': ')',
  };
  let closed = {
    '}': true,
    ']': true,
    ')': true,
  };
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (bracketOpener[char]) {
      stack.push(char);
    } else if (closed[char]) {
      if (bracketOpener[stack.pop()] !== char) return false;
    }
  }
  return stack.length === 0;
}; 
module.exports =multiBracketValidation ;
// let test= multiBracketValidation('{[()]');
// let test= multiBracketValidation('{[()]}');
// console.log(test);

