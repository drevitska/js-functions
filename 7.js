
//Написать функцию, которая принимает время (часы, минуты, секунды) и выводит его на экран в формате «чч:мм:сс».
//Если при вызове функции минуты и/или секунды не были переданы, то выводить их как 00.

// //вариант 1

// function showTime (hours, minutes = 0, seconds = 0) {

// hours = addZero(hours);
// minutes = addZero(minutes);
// seconds = addZero(seconds);

// console.log(`«${hours}:${minutes}:${seconds}»`);
// }

// function addZero(num) {
//   if (num < 10) { num = `0${num}`;
//   } else {
//     num = `${num}`;
//     }
//   return num;
// }

// showTime(0,12,177);




// // //вариант 2

function showTime (hours, minutes = '00', seconds = '00') {

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

showTime(11,'23', 4);

// //какой вариант правильнее?
// //чем отличаюмся метод и функция?
