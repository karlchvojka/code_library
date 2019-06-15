/*
Challenge: Remove all falsy values from an array.

Notes:
1. Falsy values include false, null, 0, "", undefined, and NaN;

*/

function bouncer(arr) {
  // Don't show a false ID to this bouncer.
  // the Boolean arg is defaulted as true.
  // Filter here takes our array, and checks the objects in the array.
  // if they have a true (positive) value, it returns then back to the arr variable.
  // if not, simply removes them.
   return arr.filter(Boolean);

}

bouncer([7, "ate", "", false, 9]);
