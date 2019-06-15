function largestOfFour(arr) {
  var newArr = [];                              //set up new empty array
  arr.forEach(function(subArr){                 //iterate through array with .each function
    subArr.sort(function(a, b){                 //use .sort to place largest number of each subarray into index[0]
      return a < b;
    });
    newArr.push(subArr.shift());                //use .push method to .shift the index[0] number to newArr
  });
  return newArr;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
