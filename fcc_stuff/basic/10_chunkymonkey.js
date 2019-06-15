/*
Challenge: Splits an array (arr) into groups the length of (size) as subarray.

Notes:
1. Splice array dependent on the (size) argument
2. push it back.
*/

function chunkArrayInGroups(arr, size) {
  // Set new array.s
  var newArray = [];
  // while array has more than 0 elements
  while (arr.length > 0) {
    //spice the array dependent on the size argument
    // push the new array into the newArray var
    newArray.push(arr.splice(0, size));
    }
  return newArray;
}
chunkArrayInGroups(["a", "b", "c", "d"], 2);
