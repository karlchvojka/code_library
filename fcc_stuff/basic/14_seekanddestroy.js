/*
Challenge: Remove all elements from the array that are the same as the args outside of the sub array

Notes:
1. Compare args outside of array with values inside
2. Remove ones that are the same
3. Leave the rest.
*/

function destroyer(arr) {
  // Take the arguments, turn them into an array
  var args = Array.from(arguments).slice(1);
  // run filter on arr
  return arr.filter(function(val) {
    // the condition for the fitler
    // if args !== the val its currently filtering.
    return !args.includes(val);
  });
}

destroyer([3, 5, 1, 2, 2], 2, 3, 5)
