function updateTime() {
  var now = new Date();
  var day = now.getDay();
  var date = now.getDate();
  var hour = now.getHours();
  var minute = now.getMinutes();
  // var seconds = now.getSeconds();
  // Pad single-digit numbers with a leading zero
  hour = (hour < 10 ? "0" : "") + hour;
  minute = (minute < 10 ? "0" : "") + minute;
  // seconds = (seconds < 10 ? "0" : "") + seconds;

  // Update the HTML element with the current time
  // document.getElementById("time").innerHTML = date + day + "-" + hour + ":" + minute;
  document.getElementById("time").innerHTML = hour + ":" + minute;
}

// Call updateTime() initially to display the time immediately
updateTime();

// Update the time every second (1000 milliseconds)
setInterval(updateTime, 1000);



// sound feedback 
var sound = new Audio();
sound.src = "../assets/js/click.mp3"
