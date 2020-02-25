'use strict';
function mergeSort(arr){
 let n = arr.length ;
 if (n>1){
     let mid = Math.floor(n/2);
     let left = arr.slice( 0 , mid);
     let right = arr.slice(mid , n);
     mergeSort(left);
     mergeSort(right);
     mergeSort(left , right , arr);
 }
 return arr ;
};
const merge = (left , right , arr ) =>{
 let i = 0 ; 
 let j =0 ; 
 let k = 0 ;
 while( i < left.length && j< right.length){
     if (left[i] <= right[j]){
         arr[k] = left[i] ; 
         i = i+1 ;
     } else {
         arr[k] = right[j];
         j++ ;
     }
     k++ ;
 }

if (i === left.length ){
    for (let i = 0; i < arr.length; i++) {
     arr[k] = left[i];
     k++ ;     
    } 
    }else {
        for (let i = 0; i < arr.length; i++) {
            arr[k] = left[i];
            k++ ;
        }
    }
    return arr ;
};
const nums = [9,7,8,3,2];



console.log(mergeSort(nums));