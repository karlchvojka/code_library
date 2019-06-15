/*
Challenge: Turnicate a string (first arg) if it is longer than the given maximum string length (second arg).
- Return Turnicated string with the ... ending.

Notes:
1. Take str
2. Compare the length to the num
3. If longer, cut the length of str at the num amount.
4. Add "..." to the end of the string.
*/

function truncateString(str, num) {
  // check if the length of str is less than num. If it is, just return it.
  if (str.length <= num) {
    return str;
  } else {
    // if the first fails...
    // slice the str at the 0 position
    // End point is if num is larger than 3, then factor in our dots, hence num - 3
    // if its less than or equal to 3, it ends at num, and the dots are added.
    return str.slice(0, num > 3 ? num - 3 : num) + '...';
  }
}

truncateString("A-", 1);
