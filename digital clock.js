JavaScript:

setInterval(function() {
  var currentTime = new Date();
  var hours = currentTime.getHours();
  var minutes = currentTime.getMinutes();
  var seconds = currentTime.getSeconds();
  var day = currentTime.getDay();
  var date = currentTime.getDate();
  var month = currentTime.getMonth();
  var year = currentTime.getFullYear();
  
  var dayName = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"][day];
  var monthName = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"][month];
  
  var time = (hours % 12) + ":" + minutes.toString().padStart(2, "0") + ":" + seconds.toString().padStart(2, "0") + " " + (hours < 12 ? "AM" : "PM");
  var dateString = dayName + ", " + monthName + " " + date + ", " + year;
  
  document.querySelector(".time").innerHTML = time;
  document.querySelector(".date").innerHTML = dateString;
  document.querySelector(".day").innerHTML = dayName;
}, 1000);