//Написать функцию, которая принимает три отдельные
// цифры и превращает их в одно число.
// Например: цифры 1, 4, 9 превратятся в число 149.

function createNum (hundreds, dozens, units) {
  let num = hundreds * 100 + dozens * 10 + units;
  console.log(num);
}
createNum(3,6,8);