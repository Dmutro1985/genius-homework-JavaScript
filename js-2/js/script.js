//***1***//
// Якщо змінна більше нуля - виведіть true, менше - false
//Перевірте це на варіантах 1, 0, -3.

//Рішення
// let num1 = 1;
// let num2 = 0;
// let num3 = -3;
// console.log(num1 > 0);
// console.log(num2 > 0);
// console.log(num3 > 0);

//***2***//
// Якщо змінна ="test" - виведіть true,
//Перевірте це на варіантах 'test', "qwerty", true

//Рішення
// let test = 'test';
// let qwerty = 'qwerty';
// let variableTrue = true;
// console.log(test === 'test');
// console.log(qwerty === 'test');
// console.log(variableTrue === 'test');

//***3***//
// Якщо змінна більше 10 - відніміть 5,
//менше - додайте 5, результат виведіть в консоль
//Перевірте це на варіантах 1, 10, 13.

//Рішення
// (a >= 10) ? console.log(a - 5) : console.log(a + 5);

//***4***//
//Зробіть сервіс який отримує число від 1 до 12
// виведіть місяць який дорівнює числу

//Рішення
// const months = {
//   1: "Jan",
//   2: "Feb",
//   3: "Mar",
//   4: "Apr",
//   5: "May",
//   6: "Jun",
//   7: "Jul",
//   8: "Aug",
//   9: "Sep",
//   10: "Oct",
//   11: "Nov",
//   12: "Dec"
// };

// let num = prompt("Type month 1-12");
// num = Number(num);

// if (num >= 1 && num <= 12) {
//   console.log(months[num]);
// } else {
//   console.log("Value not exist");
// }
//***5***//
//Зробіть сервіс який отримує тризначне число
//Поверніть користувачу сумму цих чисел

//Рішення
// let num = parseInt(prompt('Введіть трьохзначне число'));
// if (num >= 100) {
//     let a = Math.floor(num / 100);
//     let b = Math.floor((num % 100) / 10);
//     let c = Math.floor(num % 10);
//     let sum = a + b + c;
//     alert('Сума цифр числа ' + num + ' дорівнює = ' + sum);
// } else {
//     alert('Це не трьохзначне число');
// }
