function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }

const d = new Date();
const year = d.getFullYear();
const date = d.getDate();
const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ]
const monthName = months[d.getMonth()];
const days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'
  ]
const dayName = days[d.getDay()];
const formatted = `${dayName}, ${date} ${monthName} ${year}`;       
console.log(formatted);
document.body.innerHTML = formatted;