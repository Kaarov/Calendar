const currentDate = document.querySelector('.current-date'),
    daysTag = document.querySelector('.days'),
    prevNextIcon = document.querySelectorAll('.icons span');

let date = new Date(),
currYear = date.getFullYear(),
currMonth = date.getMonth();

console.log(date,  currYear, currMonth);

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
    'December',
];

const renderCalendar = () => {
    let firstDayOfMonth = new Date(currYear, currMonth, 1).getDay(),
        lastDateOfMonth = new Date(currYear, currMonth + 1, 0).getDate(),
        lastDateOfLastMonth = new Date(currYear, currMonth, 0).getDate();
    let liTag = "";

    for (let i = firstDayOfMonth; i > 0; i--) {
        liTag += `<li>${lastDateOfLastMonth - i + 1}</li>`;
    }

    for (let i=1; i <= lastDateOfMonth; i++) {
        liTag += `<li>${i}</li>`;
    }

    currentDate.innerHTML = `${months[currMonth ]} ${currYear}`;
    daysTag.innerHTML = liTag;
};

renderCalendar();

prevNextIcon.forEach(icon => {
   icon .addEventListener("click", () => {
       currMonth = icon.id === "prev" ? currMonth - 1 : currMonth + 1;
       renderCalendar();
   });
});