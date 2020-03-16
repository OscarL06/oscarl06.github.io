
/*function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "navbar") {
      x.className += " responsive";
    } else {
      x.className = "navbar";
    }
  }

  $('#myTopnav').onePageNav({
    currentClass: 'active',
    changeHash: false,
    scrollSpeed: 750,
    scrollThreshold: 0.5,
    filter: '',
    easing: 'swing'
  });*/
  
  
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
  const formatted = `${dayName}, ${monthName} ${date} ${year}`;       
  console.log(formatted);
  document.getElementById("date").innerHTML 
                  = formatted; 

                  