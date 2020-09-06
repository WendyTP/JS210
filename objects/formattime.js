function formatTime(date) {
  let hour = date.getHours();
  let minute = date.getMinutes();

  let formattedHour;
  if (hour < 10) {
    formattedHour = `0${hour}`;
  }else {
    formattedHour = `${hour}`;
  }

  let formattedMinute;
  if (minute < 10) {
    formattedMinute = `0${minute}`;
  }else {
    formattedMinute = `${minute}`;
  }

  return formattedHour + ':' + formattedMinute;
}

let today = new Date();
console.log(formatTime(today))