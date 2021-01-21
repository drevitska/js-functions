
//Написать функцию, которая принимает часы, минуты и секунды и возвращает это время в секундах.

function calcSeconds (hours = 0, minutes = 0, seconds = 0) {
  let res = hours * 60 * 60 + minutes * 60 + seconds;
  return res;
}
calcSeconds(185,11,06);

console.log(calcSeconds(185,11,06));
