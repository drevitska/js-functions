
//Написать функцию, которая принимает количество секунд, 
//переводит их в часы, минуты и секунды и возвращает в виде строки «чч:мм:сс».

function calcTime (timeInSeconds) {
  let second = timeInSeconds % 60;
  let minute = ((timeInSeconds - second) / 60) % 60;
  let hour = (timeInSeconds - minute * 60 - second) / 3600;
  console.log('second', second);
  console.log('minute', minute);
  console.log('hour', hour);

  function showTime (hours, minutes, seconds) {
  hours = addZero(String(hours)); // через встроенную функцию
  minutes = addZero(minutes.toString()); //через метод
  seconds = addZero(seconds.toString());

  console.log(`«${hours}:${minutes}:${seconds}»`);
  }

  function addZero(str) {
    if (str.length < 2) { str = `0${str}`;
    } 
    return str;
  }

  showTime(hour, minute, second);
}
calcTime (404404);