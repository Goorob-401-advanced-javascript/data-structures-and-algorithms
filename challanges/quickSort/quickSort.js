'use strict';
function swap(arr, leftIndex, rightIndex){
  let temp = arr[leftIndex];
  //   console.log('temp' , temp);
  //   console.log('left' , arr[leftIndex]);

  arr[leftIndex] = arr[rightIndex];
  //   console.log('left after' , arr[leftIndex]);
  //   console.log('right' , arr[rightIndex]);

  arr[rightIndex] = temp;
  //   console.log('right after' , arr[rightIndex]);

}
function partition(arr, leftIdx, rightIdx) {
  let pivot   = arr[Math.floor((rightIdx + leftIdx) / 2)], 
    i       = leftIdx, 
    j       = rightIdx; 
  console.log('pivot' ,pivot);
  while (i <= j) {
    while (arr[i] < pivot) {
      i++;
            
    }
    while (arr[j] > pivot) {
      j--;
    }
    if (i <= j) {
      swap(arr, i, j); 
      i++;
      j--;
    }
  }
  return i;
}

function quickSort(arr, leftIdx, rightIdx) {
  let index;
  if (arr.length > 1) {
    index = partition(arr, leftIdx, rightIdx); 
    console.log('left',leftIdx);
    console.log('index',index);
    console.log('right',rightIdx);
    console.log('arr' ,arr);
      
      
    if (leftIdx < index - 1) { 
      quickSort(arr, leftIdx, index - 1);
    }
    if (index < rightIdx) {
      quickSort(arr, index, rightIdx);
    }
  }
  return arr;
}

let arr = [8,4,23,42,16,15];
quickSort(arr, 0, arr.length - 1);
console.log(quickSort(arr, 0, arr.length - 1)); 
module.exports = quickSort ;
// used 'https://www.guru99.com/quicksort-in-javascript.html' for solving this code challange 