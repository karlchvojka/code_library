/*
Challenge: Where do I belong

Notes:
1. Take second args
2. Sort array
3. Insert arg into array at its sorted position
4. Return the index of that position
*/

function getIndexToIns(arr, num) {
  // Add Num to the array (concat)
  // Sort the array smallest to highest (sort)
  // Get the index of num in the array. (indexOf)
  return arr.concat(num).sort((a,b) => a-b).indexOf(num);
}

getIndexToIns([40, 60], 50);
