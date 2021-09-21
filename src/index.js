'use strict'
//function should return the contents of arr divided into n equally sized arrays
const groupArrayElements = (arr, n) => {
  const result = [];
  const length = arr.length;
  //return empty array if array has no length or can't be subdivided n times
  if (length === 0 ||  length < n) {
    return result;
  //if array can be evenly distributed  
  }
  //get closest possible even distribution
  let i = length-1;
  while ((i)%(n-1) != 0) {
    i-=1;
  }
  distributeEvenly(i, n-1);
  //push remainder to last element of result
  result.push(arr.slice(i));
  return result;

  
  //helper function to keep code DRY
  function distributeEvenly(length, n) {
    let j = 0;
    const subArrayLength = length / n; 
    while (j < length) {
      result.push(arr.slice(j, j + subArrayLength));
      j += subArrayLength;
    }
  }
}


