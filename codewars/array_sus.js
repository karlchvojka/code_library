var theArray = [6, 2, 1, 8, 10];

function sumArray(array) { //function declaration
  return array ? (
    array.sort(function (a, b) { //array.sort reorganizes the array.
        return a-b; //alg that compares two values of the array and sorts for min to max
      }).shift(), //grabs the array and removes the first value
    array.length > 1 ? ( //checks if the array has more than one value
      array.pop(), // removes the last value
      array.length > 1 ? //Checks if the current array has more than one value.
        array.reduce(function (a,b) { //sums all of the items togeather.
          return a+b;
        }) : 0
    ) : 0
  ) : 0;
}
;
