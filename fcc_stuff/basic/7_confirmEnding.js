/*
Challenge: Confirm the String ends with the Target.

Notes:
1. Don't use the .endsWith() method
2. Preferred use of the substr() or subString() methods

After Notes:
1. Some of the tests were multiple letter strings.
- To do this, we needed to find out what the length of the target is.
- Then find out what the characters are that is = to the length of the target
- Isolate the result in a variable so we can use it.
- Compare the original target to see if it does exist at the end of the string
  keeping in mind what the target is.

*/

function confirmEnding(str, target) {
  // Find length of the target
  var tarL = target.length;
  // Find what the result is that is the length = the target length
  // In this example target === 4.
  // find out what the end of the string is within the length of the target.
  // Apply that to a variable.
  var end = str.substring(str.length - tarL);
  // Compare the target to the result of end.
  return target === end;
}

confirmEnding("He has to give me a new name", "name");
