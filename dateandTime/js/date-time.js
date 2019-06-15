

//var time = dateFull.getHours() + ":" + dateFull.getMinutes() + ":" + dateFull.getSeconds();
//document.write(time);

$(document).ready(function() {
  function displayTime() {
    // Get current time and seperate it into pieces
    var currentTime = new Date();
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();

    //if seconds are less than 10
    if (seconds < 10) {
      //Add the 0 digit to the front so 9 becomes 09
      seconds = "0" + seconds;
    }

    //Identifies the placement in the HTML
    var clockDiv = document.getElementById('clock');


    //Pushes the data to said div.
  clockDiv.innerHTML = "<h3>"+ hours + ":" + minutes + ":" + seconds + "</h3>";
  }
  function displayDate() {
    var dateFull = new Date();
    var weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    var dateDay = weekdays[dateFull.getDay()];
    var calendarDiv = document.getElementById('date');
    calendarDiv.innerHTML = "<h2>" + dateDay + "</h2>";

  }
  displayDate();
  displayTime();
  setInterval(displayTime, 1000);
});
