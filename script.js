const daysTag = document.querySelector(".days"),
    booking_scheduleTag = document.querySelector(".booking-schedule"),
    currentDate = document.querySelector(".current-date"),
    currentDateMonthID = document.querySelector("#current-date-month"),
    currentDateYearID = document.querySelector("#current-date-year"),
    prevNextIcon = document.querySelectorAll(".icons span");

// getting new date, current year and month
let date = new Date(),
    currYear = date.getFullYear(),
    currMonth = date.getMonth();

// storing full name of all months in array
const months = ["January", "February", "March", "April", "May", "June", "July",
    "August", "September", "October", "November", "December"];

const renderCalendar = (day) => {
    let firstDayofMonth = new Date(currYear, currMonth, 1).getDay(), // getting first day of month
        lastDateofMonth = new Date(currYear, currMonth + 1, 0).getDate(), // getting last date of month
        lastDayofMonth = new Date(currYear, currMonth, lastDateofMonth).getDay(), // getting last day of month
        lastDateofLastMonth = new Date(currYear, currMonth, 0).getDate(); // getting last date of previous month
    let liTag = "";

    for (let i = firstDayofMonth; i > 0; i--) { // creating li of previous month last days
        liTag += `<li class="inactive">${lastDateofLastMonth - i + 1}</li>`;
    }

    for (let i = 1; i <= lastDateofMonth; i++) { // creating li of all days of current month
        // adding active class to li if the current day, month, and year matched
        let isToday;
        if (i === date.getDate() && currMonth === new Date().getMonth()
        && currYear === new Date().getFullYear())  {
            isToday = "active";
        } else {
            isToday = "";
        };
        liTag += `<li class="${isToday}">${i}</li>`;
    }

    for (let i = lastDayofMonth; i < 6; i++) { // creating li of next month first days
        liTag += `<li class="inactive">${i - lastDayofMonth + 1}</li>`
    }
    currentDate.innerText = `${months[currMonth]} ${currYear}`; // passing current mon and yr as currentDate text
    currentDateMonthID.innerHTML = `${currMonth}`;
    currentDateYearID.innerHTML = `${currYear}`;
    daysTag.innerHTML = liTag;
}
let dayclicked;

renderCalendar();

prevNextIcon.forEach(icon => { // getting prev and next icons
    icon.addEventListener("click", () => { // adding click event on both icons
        // if clicked icon is previous icon then decrement current month by 1 else increment it by 1
        currMonth = icon.id === "prev" ? currMonth - 1 : currMonth + 1;

        if(currMonth < 0 || currMonth > 11) { // if current month is less than 0 or greater than 11
            // creating a new date of current year & month and pass it as date value
            date = new Date(currYear, currMonth);
            currYear = date.getFullYear(); // updating current year with new date year
            currMonth = date.getMonth(); // updating current month with new date month
        } else {
            date = new Date(); // pass the current date as date value
        }
        renderCalendar(); // calling renderCalendar function

        // const daysli = document.querySelectorAll(".days li");

        // daysli.forEach(li => { 
        //     li.addEventListener("click", () => {
        //         li.className = "active";
        //         console.log(li);
        //     })
        // }) 
    });
});

const daysli = document.querySelectorAll(".days li");

const day_of_month = document.getElementById("message");

daysli.forEach(li => {
    li.addEventListener("click", () => {
        console.log(li);
        day_of_month.innerHTML = `${li.firstChild.nodeValue}  ${months[currMonth]}`;



        let liTag = "";

        // if (10 === parseInt(li.firstChild.nodeValue)) {

        for (let i = 6; i < 22; i++) {
            liTag += `<li class="booking-row"><span>${i} : 00</span><span>${i+1} : 00</span><a class="disable">disable</a></li>`;
        }
        // }
        booking_scheduleTag.innerHTML = liTag;
    })
}) 