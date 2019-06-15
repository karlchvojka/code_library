/*
Challenge: Return true if first ele contains the same characters as the second.

Notes:
1. take both strings, make them lowercase.
2. make sure both have the same letters.
3. return true or false.
*/


function mutation(arr) {
  // take the second string, lowercase
  // split into an array.
   return arr[1].toLowerCase().split('').every(function(b) {
    // the every method runs the below on each letter
    // this turns arr[0] to lowercase, and checks the index against the current letter in the every.
    // -1 is the end result, returning false.
    return arr[0].toLowerCase().indexOf(b) !== -1;
  });


}

mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"]);
