/*
Challenge: Return remaining elements after removing the n (howMany) elements

Notes:
1. Remove the howMany amount of elements
2. Return the remaining.
*/

function slasher(arr, howMany) {
    // take array, splice starting at first element, ending at howMany
    // Remove them
    arr.splice(0, howMany);
  return arr;
}

slasher([1, 2, 3], 2);
