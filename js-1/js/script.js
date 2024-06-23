//***1***
// Робота зі змінними
// Оголосіть дві змінні: name та city.
// Присвойте значення "Іван" змінній name.
// Скопіюйте значення зі змінної name в city.
// Виведіть значення змінної city, використовуючи функцію console.log (яка повинна показати “Іван”).

// Рішення
//let name, city;
//name = "Іван";
//name = city;
//console.log(city);// "Іван"

//***2***
//Який буде результат виконання скрипта?
//let name = "Olga";
//сonsole.log(`привіт ${1}`); //
//console.log(`привіт ${"name"}`); //
//console.log(`привіт ${name}`); // ?

//Рішення
//console.log(`привіт ${name}`);//"Привіт Olga"

//***3***
//Видобути число зі змінних
//let a = "5";
//let b = "13cvb";
//let c = "12.9sxdcfgv";
// вивести в консоль тип

//Рішення
//console.log(Number.parseInt(a));//5
//console.log(Number.parseInt(b));//13
//console.log(Number.parseFloat(c));//12.9

//***4***
//Зробіть, щоб 0.1 + 0.2 = 0.3

//Рішення
// console.log((0.1 * 10 + 0.2 * 10) / 10);

//***5**
//Поверніть найбільше число с набору 20, 10, 50, 40

//Рішення
//console.log(Math.max(20, 10, 50, 40));

//***6**
//Поверніть випадкове число в діапазоні від 2 до 4

//Рішення
//console.log(Math.random() * (4 - 2) + 2);

//***7**
//дізнатись довжину message
// const message = "Welcome to Bahamas!";

//Рішення
//const message = "Welcome to Bahamas!";
//console.log(message.length);//19

//***8**
//вивести в консоль message великими літерами

//Рішення
//const message = "Welcome to Bahamas!";
//console.log(message.toUpperCase());

//***9**
// створити пустий об*єкт
// додати туди ім*я, вік і місто
// вивести результат в консоль
// видалити місто
// додати буль з ключем: like flowers
// вивести результат в консоль

//Рішення
//let user = {};
//user.name = 'Dmutro';
//user.age = '39';
//user.city = 'Ivano-Frankivsk';
//console.log(user);
//delete user.city;
//user['like flowers'] = true;
//console.log(user);

//***10**
// За допомогою циклу “for…in” вивести в консоль ключі і значення об*єкта

//Рішення
//let user = {
//  name: "Іван",
// age: 30,
//isAdmin: true,
//};
//for (key in user) {
//console.log(`${key}: ${user[key]};`);
//console.log(key + ":" + " " + user[key] + ";");
//}
