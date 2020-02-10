'use strict';

class AnimalShelter {
  constructor(){
    this.dog = [];
    this.cat = [];
  }
  enqueue(animal){
    if(animal.type === 'dog'){
      this.dog.unshift(animal);
    }else if (animal.type === 'cat'){
      this.cat.unshift(animal);
    }else {
      return null;
    }}
  dequeue(pref){
    if(pref.type === 'dog'){
      this.dog.pop();
      return this.cat;
    }else if(pref.type === 'cat'){
      this.cat.pop();
      return this.cat;
    }else{
      return null;
    }
  }
  
}
module.exports = AnimalShelter;