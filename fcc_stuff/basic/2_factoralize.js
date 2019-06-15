/*
Challenge: Factoralize the num.

Notes:
1. Fuction return the total of the factorialize of the number provided
*/
function factorialize(num) {
  var holder = 1;
  for (i=1; i<=num; i++) {
    holder = holder * i;
  }
  return holder;
}

factorialize(5);
