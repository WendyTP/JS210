function formattedDay(date) {
  let daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  return daysOfWeek[date.getDay()];
}

function formattedMonth(date) {
  let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

  return months[date.getMonth()];
}

function dateSuffix(dateInMonth) {
  let remaining = dateInMonth % 10;
  let suffix;
  if (remaining === 1) {
    suffix = 'st';
  } else if (remaining === 2) {
    suffix = 'nd';
  } else if (remaining === 3) {
    suffix = 'rd';
  } else {
    suffix = 'th'; 
  }
  return String(dateInMonth) + suffix;
}

function formattedDate(date) {
  let day = formattedDay(date);
  let month = formattedMonth(date);

  console.log(`Today's date is ${String(day)}, ${String(month)} ${dateSuffix(date.getDate())} `)

}

let today = new Date();

formattedDate(today);