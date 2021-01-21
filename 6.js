
//Написать функцию, которая принимает минимальное и максимальное значения для диапазона, 
//и выводит только те числа из диапазона, которые являются совершенными.
// Используйте написанную ранее функцию, чтобы узнавать, совершенное число или нет. 

function checkPerfectNumber (num) {
  let sum = 0;
  for (let i = 1; (i <= Math.round(num / 2)) && sum <= num; i++) {
    if (num % i === 0) {
      sum += i;
    }
  }

  return sum === num;
}


function showPerfectNumber (num1, num2) {
  let min = num1;
  let max = num2;

  if ( num1 > num2) {
    min = num2;
    max = num1;
  }

  for ( let i = min; i <= max; i++) {
    if (checkPerfectNumber(i)){
      console.log('Совершенное число',i);
    }
  }
}
showPerfectNumber(25, 527);
