//Написать функцию, которая принимает 2 числа и возвращает -1, 
//если первое меньше, чем второе; 1 – если первое больше, 
//чем второе; и 0 – если числа равны.

let res = 0;

function getCompare(number1, number2) {
  
  if (number1 < number2) {
    res = -1;
  }

  if (number1 > number2) {
    res = 1;
  }

  return res;
}
getCompare(15,115);

console.log(res);
