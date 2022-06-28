
const calendar = (function () {
  const date = new Date();

  const renderCalendar = function() {
    date.setDate(1);

    const monthDays = document.querySelector(".days");
    const daysArr = document.getElementsByClassName('c-cal__day');  
    const lastDay = new Date(
      date.getFullYear(),
      date.getMonth() + 1,
      0
    ).getDate();

    const prevLastDay = new Date(
      date.getFullYear(),
      date.getMonth(),
      0
    ).getDate();

    const firstDayIndex = date.getDay();

    const lastDayIndex = new Date(
      date.getFullYear(),
      date.getMonth() + 1,
      0
    ).getDay();

    const nextDays = 7 - lastDayIndex - 1;

    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    const monthIndex = date.getMonth();
    const displayedYear = date.getFullYear();
    
    document.querySelector(".date h1").innerHTML = months[monthIndex] + ", " + displayedYear;

    document.querySelector(".date p").innerHTML = new Date().toDateString();

    let days = "";

    for (let x = firstDayIndex; x > 0; x--) {
      days += `<div class="prev-date">${prevLastDay - x + 1}</div>`;
    }

    for (let i = 1; i <= lastDay; i++) {   
      days += `<div class="c-cal__day">${i}</div>`;    
    }

    for (let j = 1; j <= nextDays; j++) {
      days += `<div class="next-date">${j}</div>`;    
    }
    monthDays.innerHTML = days;    
    return { days: daysArr };
  };
  const switchMonth = function(e) {
    if (e.target.classList.contains('prev')) {
      date.setMonth(date.getMonth() - 1);
      renderCalendar();      
    } else if (e.target.classList.contains('next')) {
      date.setMonth(date.getMonth() + 1);
      renderCalendar();      
    }
  }
  renderCalendar();
  
  return {
    date: date,
    days: renderCalendar().days,
    switchMonth: switchMonth
  };
})();

export { calendar };
