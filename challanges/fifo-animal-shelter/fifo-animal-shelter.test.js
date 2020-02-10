'use strict';

const AnimalShelter = require('./fifo-animal-shelter.js');
describe('AnimalShelter Class',()=>{
  it(' enqueue cat',()=>{
    let queue = new AnimalShelter();
    let newCat = {name:'kaneki',type:'cat'};
    queue.enqueue(newCat);
    expect(queue.cat[0].name).toEqual('kaneki');
    expect(queue.cat[0].type).toEqual('cat');

  });
  it(' dequeue cat',()=>{
    let queue = new AnimalShelter();
    let newCat1 = {name:'kaneki',type:'cat'};
    let newCat2 = {name:'semba',type:'cat'};
    queue.enqueue(newCat1);
    queue.enqueue(newCat2);
    queue.dequeue({type:'cat'});
    expect(queue.cat[0].name).toEqual('semba');
    expect(queue.cat[0].type).toEqual('cat');

  });
  it(' enqueue dog',()=>{
    let queue = new AnimalShelter();
    let newDog = {name:'jo',type:'dog'};
    queue.enqueue(newDog);
    expect(queue.dog[0].name).toEqual('jo');
    expect(queue.dog[0].type).toEqual('dog');

  });
  it(' dequeue dog',()=>{
    let queue = new AnimalShelter();
    let newDog1 = {name:'jo',type:'dog'};
    let newDog2 = {name:'peley',type:'dog'};
    queue.enqueue(newDog1);
    queue.enqueue(newDog2);
    queue.dequeue({type:'dog'});
    expect(queue.dog[0].name).toEqual('peley');
    expect(queue.dog[0].type).toEqual('dog');

  });

});