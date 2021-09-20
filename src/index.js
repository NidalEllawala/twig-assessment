'use strict'
//function should return the contents of arr divided into n equally sized arrays

const groupArrayElements = (arr, n) => {
  const result = [];
  const length = arr.length;
  //return empty array if array has no length or can't be subdivided n times
  if (length === 0 ||  length < n) {
    return result;
  //if array can be evenly distributed  
  } else if (length % n === 0) {
    distributeEvenly(length, n, result);
    return result;
  //if array can't be evenly distributed and remainder = 1
  } else if ((length-1)%(n-1) === 0) {
    distributeEvenly(length-1, n-1);
    //push remainder to last element of result
    result.push(arr.slice(-1));
    return result;
  //if array can't be evenly distributed and remainder > 0  
  } else {
    //get closest possible even distribution
    let i = length - 1;
    while ((i)%(n-1) != 0) {
      i-=1;
    }
    distributeEvenly(i, n-1);
    //push remainder to last element of result
    result.push(arr.slice(i));
    return result;
  }
  
  //helper function to keep code DRY
  function distributeEvenly(t, n) {
    let j = 0;
    const subArrayLength = t / n; 
    while (j < t) {
      result.push(arr.slice(j, j + subArrayLength));
      j += subArrayLength;
    }
  }
}

console.log(groupArrayElements([1,2,3,4,5], 3));
//console.log(groupArrayElements([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16], 5));

