'use strict';
class Hashmap {
  constructor(size){
    this.arr = new Array(size);
    this.size = size;
  }
  
  hash(key){
    return  key.split('').reduce((acc, val) => {
      return acc + val.charCodeAt(0);
    }, 0) * 19 % this.size;
  }
  
  add(key, val){
    let index = this.hash(key);
    
    if(!this.arr[index]){
      this.arr[index] = [];
    }
  
    this.arr[index].push([key,val]);
    return index;
  }
  
  get(key){
    const hashed = this.hash(key);
    const array = this.arr[hashed];
    if(array === null || array === undefined){
      return null;
    }
  
    for(let i = 0; i < array.length; i++){
      if(array[i][0] === key){
        return array[i][1];
      }
    }
    return null;
  }
  
  contains(key){
    const hashed = this.hash(key);
    const array = this.arr[hashed];
    if(array === null || array === undefined){
      return false;
    }
  
    for(let i = 0; i < array.length; i++){
      if(array[i][0] === key){
        return true;
      }
  
    }
    return false;
  }
}

module.exports = Hashmap;
    