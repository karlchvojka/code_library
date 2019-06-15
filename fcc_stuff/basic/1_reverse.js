/*
Challenge: Reverse the String.

Notes:
1. Split the string into parts
2. Reverse the order.
3. Join the parts back togeather
*/
function reverseString(str) {
  var str = str.split("").reverse().join("");
  return str;
}

reverseString("hello");
