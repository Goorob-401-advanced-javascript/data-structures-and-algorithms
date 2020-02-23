'use strict';
function insertionSort(arr){
  for (let i = 1; i < arr.length; i++){
    let temp = arr[i];
    let  j = i-1 ;
    console.log('i berfore while ' , i);
    console.log('j berfore while ' ,j);

    console.log ('temp outside while ' , temp );

    while (j >= 0 && arr[j] > temp ){

      arr[j+1] = arr[j];
      console.log('arr[j]' , arr[j]);
      j = j-1 ;
      console.log ('temp ' , temp );
      console.log('i' , i);
      console.log('j' , j);
      console.log('arr[j+1]' ,arr[j+1] );

    }
    arr[j+1] = temp ;
    console.log('arr' , arr );
  }
  return arr ;
}
let array = [8,4,23,42,16,15];
let insert = insertionSort(array);
console.log(insert);
 
module.exports = insertionSort ;
