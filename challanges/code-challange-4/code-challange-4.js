'use strict';
function fibFunction(x){
  let array = [0, 1];
  for (let i = array.length; i < x + 1; i++){
    let sum = array[i - 2] + array[i -1];
    array.push(sum);
  }
  return array[x];
}

module.exports = fibFunction ;
