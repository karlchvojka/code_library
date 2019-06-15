/*
Challenge: Find largest in array.

Notes:
1. Need to access sub array in the arr array.
2. Need to compare the items in the array to each other to find the largest.
3. Push the result back to the arr.
4. Return arr.
*/

function largestOfFour(arr) {
  // map through each of the first set of array.
  var arr = arr.map(function(subArray) {
    // Invokes Math.max on each of the items in each of the sub arrays.
    // Because its inside of a map(); it runs the below on the sub arrays, not the main.
    // returns back the largest number of each to the arr array.
    return Math.max.apply(null, subArray);
  })
  // returns the answer to the global scope for checking.
  return arr;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
