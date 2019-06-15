
function calculateDayInYear(date) {
  const splitDate = date.split('/');
  const year = Number(splitDate[0]);
  const month = Number(splitDate[1]);
  const day = Number(splitDate[2]);
  const febDays = daysInFeb(year);
  const DAYS_IN_MONTH = [31, febDays, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  if (year && validMonth(month) && validDay(month, day)) {
    console.log(date, "is day", calculateDayNumber(month, day), "of the year", year);
    return calculateDayNumber(month, day);
  } else {
    console.log("Invalid date");
  }

  // Make sure the month number is between 1 and 12 and return true
  function validMonth(month) {
    return month && month >= 1 && month <= 12;
  }

  //Make sure day is a valid day based on how many are expected from the DAYS_IN_MONTH Array.
  function validDay(month, day) {
    return day && day >= 1 && day <= DAYS_IN_MONTH[month - 1];
  }

  // Calcualte the number of the day out of 365
  function calculateDayNumber(month, day) {
    // Set the first day of the year as 1.
    let dayOfYear = 0;

    for (let i = 0; i < month - 1; i++) {
      dayOfYear += DAYS_IN_MONTH[i];
    }

    dayOfYear += day;

    return dayOfYear;
  }

  function daysInFeb(year) {
    return isLeapYear(year) ? 29 : 28;
  }

  function isLeapYear(year) {
    return isMultiple(year, 400) || !isMultiple(year, 100) && isMultiple(year, 4);
  }
}

function isMultiple(numerator, denominator) {
  return numerator % denominator === 0;
}

var date = process.argv[2];


if (!date) {
  console.log("Please provide a date in the format YYYY/MM/DD");
} else {
  calculateDayInYear(date);
}

/*
    Below are some simple tests!

    They run the function with a predetermined parameter and compare the output to the value we are expecting to get!

    The console.log will output either 'true' or 'false' based on whether or not the function
    returns a value that matched our expected value.

    You'll know your code works correctly when all of these tests return 'true'
*/
console.log("Tests:");
console.log("---------------");
console.log(calculateDayInYear("1900/3/2") === 61);
console.log(calculateDayInYear("2000/3/2") === 62);
console.log(calculateDayInYear("2012/2/29") === 60);
console.log(calculateDayInYear("2015/12/31") === 365);
