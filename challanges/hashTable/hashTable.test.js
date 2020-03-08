'use strict ';

const Hashmap = require('./hashTable.js');

describe('Hashmap', () => {
  it('add ', () => {
    const hashmap = new Hashmap(1024);
    hashmap.add('name', 'angel');
    expect(hashmap.contains('name')).toBe(true);
  });


  it('Successfully handle a collision within the hashtable', () => {
    const hashmap = new Hashmap(1024);
    hashmap.add('name', 'angel');
    hashmap.add('class', '401');
    expect(hashmap.get('class')).toBe('401');
  });
});