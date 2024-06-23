// ***1***
// У вас є масив об’єктів fruts, і в кожному з них є name
// Напишіть код, який перетворює їх в масив імен.
// const fruts = [
// { id: 0, name: "Apple" },
// { id: 1, name: "Tomat" },
// { id: 2, name: "Cherry" },
// { id: 3, name: "Orange" },
// ];

//Рішення
// const fruts = [
//   { id: 0, name: "Apple" },
//   { id: 1, name: "Tomat" },
//   { id: 2, name: "Cherry" },
//   { id: 3, name: "Orange" },
// ];
// let arr = [];
// for (let i = 0; i < fruts.length; i++) {
//     let word = fruts[i].name;
//     arr.push(word);
// }
// console.log(arr);

// ***2 ***
//Виведіть парні числа від 2 до 10, використовуючи цикл for.

//Рішення
// for (let a = 2; a < 10; a += 2) {
//   console.log(a);
// }

// ***3 ***
//Замініть цикл "for" на "while"
// for (let i = 0; i < 5; i++) {
// console.lpg( `цифра ${i}!` );
// }

//Рішення
// for (let i = 0; i < 5; i++) {
//     console.lpg( `цифра ${i}!` );
//   }
// let i = 0;
// while (i<5) {
//     console.log(`цифра ${i}!`);
//     i++;
// }

// ***4 ***
//Напишіть цикл, який пропонує prompt ввести число більше за 100.
//Якщо відвідувач введе менше число – попросити ввести ще раз, і так далі.
//Цикл повинен запитувати число доти, доки відвідувач не введе число,
// більше за 100, або не скасує ввід/введе порожній рядок.

//Рішення
// while (true) {
//   let value = +prompt("Введіть число більше 100");
//   if (!value) break;
//   else if (value > 100) {
//     alert("Введено більше 100! Число = " + value);
//     break;
//   }
// }

// ***5 ***
// Вирахуйте середній вік
// const girls = [
// { age: 23, name: "Оля" },
// { age: 29, name: "Аня" },
// { age: 10, name: "Юля" },
// { age: 20, name: "Катя" },
// ];

//Рішення
// const girls = [
//   { age: 23, name: "Оля" },
//   { age: 29, name: "Аня" },
//   { age: 10, name: "Юля" },
//   { age: 20, name: "Катя" },
// ];
// let value = 0;
// let i = 0;
// for (i = 0; i < girls.length; i++) {
//   value += girls[i].age;
// }
// console.log(`Середній вік ${value / i} років`);
