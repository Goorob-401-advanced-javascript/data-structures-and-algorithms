'use strict';

function insertShiftArray(arr, val) {
    let mid = Math.floor(arr.length / 2);
    let newArr = new Array(arr.length + 1);
    for (let i = 0; i <= mid; i++) {
        if (i === mid) { newArr[i] = val; }
        else { newArr[i] = arr[i]; }
    }
    for (let j = mid; j <= arr.length - 1; j++) {
        newArr[j + 1] = arr[j];
    } return newArr;
}
module.exports = insertShiftArray;