'use strict';

function binarySearch(arr, searchKey) {
    let first = 0;
    let end = arr.length - 1;
    while (first <= end) {
        let midElement = Math.floor((first + end) / 2);
        if (arr[midElement] === searchKey){ return midElement }
        else if (arr[midElement] < searchKey)
          {  first = midElement + 1;}
        else{
            end = midElement - 1;};
    }
    return -1;
}
module.exports = binarySearch;