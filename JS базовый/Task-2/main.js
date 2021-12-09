
/* Задание №2
Вычислите дробные части чисел a и b с точностью c. 
Выведите получившиеся числа с помощью console.log. 
Выведите результаты их сравнения >, <, ≥, ≤, ===, ≠ 
с помощью console.log.*/


let a = 13.123456789;  //другие значения 13.890123, 13.890123
let b = 2.123;			//другие значения 2.891564, 2.891564
let c = 3;				//другие значения 2, 3


console.log (a.toFixed(c));
console.log (b.toFixed(c));

console.log(a>b);
console.log(a<b);
console.log(a>=b);
console.log(a<=b);
console.log(a===b);
console.log(a!==b);
