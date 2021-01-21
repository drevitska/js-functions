
//Написать функцию, которая вычисляет факториал переданного ей числа.

function calcFactorial(number) {
  let res = 1;
  for ( let i = 0; i < number; i++){
    res *= (i + 1);
  }
  console.log(res);
}
calcFactorial(5);