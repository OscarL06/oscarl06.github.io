function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }

/*const currentDate = new Date();
const month = currentDate.getMonth();
const day = currentDate.getDate();
const year = currentDate.getFullYear();
const fullDate = month + "/" + day + "/" + year;
document.write(fullDate); */

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
