function currentDateAbb(date) {
  let daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  let currentDate = date.getDay();
  return (daysOfWeek[currentDate]);
}

function currentDateOfMonth (date) {
  return date.getDate();
}


function dateSuffix(date) {
  let remaining = date % 10;
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
  return suffix;
}

function currentMonth(date) {
  let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

  let month = date.getMonth();
  return months[month];
}

let today = new Date();

console.log(`Today's date is ${String(currentDateAbb(today))}`)
console.log(`Today's date is ${String(currentDateAbb(today))}, the ${String(currentDateOfMonth(today))}${dateSuffix(today)}.`)
console.log(`Today's date is ${String(currentDateAbb(today))}, ${String(today.getMonth())} ${String(currentDateOfMonth(today))}${dateSuffix(today)}.`)
console.log(`Today's date is ${String(currentDateAbb(today))}, ${currentMonth(today)} ${String(currentDateOfMonth(today))}${dateSuffix(today)}.`)