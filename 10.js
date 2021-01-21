//Написать функцию, которая считает разницу между датами. 
//Функция принимает 6 параметров, которые описывают 2 даты, и возвращает результат в виде строки «чч:мм:сс». 
//При выполнении задания используйте функции из предыдущих 2-х заданий:
// сначала обе даты переведите в секунды, узнайте разницу в секундах, 
//а потом разницу переведите обратно в «чч:мм:сс»

function calcSeconds (hours, minutes, seconds) {
let res = hours * 60 * 60 + minutes * 60 + seconds;
return res;
}

function differenceDate (hour1 = 0, minute1 = 0, second1 = 0, hour2 = 0, minute2 = 0, second2 = 0) {
  console.log(`Вы ввели`,hour1, minute1, second1, hour2, minute2, second2);


  let date1 = calcSeconds(hour1, minute1, second1);
  let date2 = calcSeconds(hour2, minute2, second2);
  console.log (`date1`,date1);
  console.log (`date2`,date2);

  let res = date1 - date2;

  if (res < 0) {
    res = -res;
  }

  console.log(`res`,res);

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
calcTime (res);
  }
differenceDate(34, 12, 33, 34, 12, 33);
