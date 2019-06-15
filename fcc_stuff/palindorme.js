function palindrome(str) {
  var palSplit = str.split("");
  var palRevers = palSplit.reverse();
  var paljoin = palRevers.join("");

  if (paljoin === str) {
    console.log('true');
    return true;
  } else {
    console.log('false');
    return false;
  }
}

palindrome("eye");
