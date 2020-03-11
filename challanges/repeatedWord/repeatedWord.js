
'use strict';
function findRepeatedWord(str){
  let splitword = split(str);
  
  for(let i=0; i < splitword.length; i++){
    for(let j=0; j < splitword.length; j++){
      if(splitword[i] === splitword[j] && i !== j){
        return splitword[i];
      }
    }
  }
  return 'no match';
}
  
function split(str) {
  let word = [];
  let wordPending = '';
  for (let i=0; i < str.length; ++i) {
    if (str[i] === ' ') { 
      word.push(wordPending);
      wordPending = ''; 
    } else {
      wordPending += str[i]; 
    }
  }
  
  
    
  if (wordPending.length > 0) {
    word.push(wordPending); // 
  }
  
  return word;
}
  
module.exports = findRepeatedWord;