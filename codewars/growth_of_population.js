function nbYear(p0, percent, aug, p) {
    // first things. Declare the var
     var cP = p0; // current pop
    var yP = 0;  // years passed

    while (cP < p) { //while current Population is less than p
      cP = cP + (cP * (percent === null ? 0 : percent/100)) + aug;
      // ok. inside out
      // percent === null ? 0 means that the var percent must have a variable.
      // percent === null ? 0 : percent/100 means that if percent has no value, return a percentage else return 0
      // so, cp = cp + (cp * (percentage if valid)) + aug;

      yP++;
    }
    return yP;
    console.log(cP);
}

nbYear(1500, 5, 100, 5000);
