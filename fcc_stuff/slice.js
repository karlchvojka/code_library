function truncateString(str, num) {
  // Clear out that junk in your trunk
   if (str.length > num){
    str.slice(num);
    return str + "...";
  }
  else if (num <= 3) {
    str.slice(3);
    return str + "...";
  }
  else {
    return "This is not a string";
  }

}

truncateString("A-tisket a-tasket A green and yellow basket", 11);
