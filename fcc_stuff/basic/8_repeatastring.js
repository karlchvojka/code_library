/*
Challenge: Repeat a string (first argument) num times (second argument).
- Return an empty string if num is not a positive number.

Notes:
1. Take str
2. Pull in the num
3. Return string the amount of times as num
4. Return empty string if number is negative

*/

function repeatStringNumTimes(str, num) {
  // Check if num is positive
  if (num > 0) {
    //repeat str the numbers of num
    var str = str.repeat(num);
    return str;
    } else {
      // else return empty string
      return "";
    }
}

repeatStringNumTimes("abc", -2);
