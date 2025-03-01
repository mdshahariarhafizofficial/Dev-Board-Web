const d = new Date();
const date = d.toString();
const day = date.slice(0,3);
const dateMonthYear = date.slice(3, 15);

// Set Day
document.getElementById('day').innerText = day+" ,";
// Set Date Month Year
document.getElementById('date-month-year').innerText = dateMonthYear;

