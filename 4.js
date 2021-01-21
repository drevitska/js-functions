
//Написать функцию, которая принимает длину и ширину прямоугольника и вычисляет его площадь
//. Если в функцию передали 1 параметр, то она вычисляет площадь квадрата.

function calcSquare(width, height = width) {
  let s = width * height;
  console.log(s);
}
calcSquare(5, 6);


