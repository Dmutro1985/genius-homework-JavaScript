//***1***
//1) написати об*єкт студента який буде виводити ім*я, спеціальнісь, середній
//бал і кількість пропущених занять
//2) написати метод який буде виводити цю інформацію
//3) написати три варіанти студентів
//4) прикріпити знначення за допомогою call apply bind

//Рішення
// const studentTemplate = {
//     name: "",
//     major: "",
//     averageGrade: 0,
//     absences: 0
// };
// // Варіанти студентів у масиві
// const students = [
//     {
//         ...studentTemplate,
//         name: "Дмитро",
//         major: "Економіка",
//         averageGrade: 4.2,
//         absences: 3
//     },
//     {
//         ...studentTemplate,
//         name: "Анастасія",
//         major: "Соціологія",
//         averageGrade: 4.8,
//         absences: 2
//     },
//     {
//         ...studentTemplate,
//         name: "Мирослава",
//         major: "Фізика",
//         averageGrade: 4.3,
//         absences: 5
//     }
// ];
// for (const student of students) {
//     console.log("-----");
//     console.log(`Ім'я: ${student.name}`);
//     console.log(`Спеціальність: ${student.major}`);
//     console.log(`Середній бал: ${student.averageGrade}`);
//     console.log(`Кількість пропущених занять: ${student.absences}`);
// }

//***2***
//Написати дві кнопки і закріпити на них функції
//при натисканні на кнопку html - має видати коротке визначення що це таке
//при натисканні на кнопку css - має видати коротке визначення що це таке

//Рішення
// <!DOCTYPE html>
// <html>
// <head>
//     <title>Button</title>
// </head>
//     <div>
//       <button id="html">HTML</button>
//       <button id="css">CSS</button>
//     </div>
// <body>
//     <button id="htmlButton">HTML</button>
//     <button id="cssButton">CSS</button>
//     <p id="output"></p>
//     <script>
// function html() {
//   console.log("HTML- стандартизована мова розмітки документів для перегляду вебсторінок у браузері ");
// }
// function css() {
//   console.log(
//     "CSS- це спеціальна мова стилю сторінок, що використовується для опису їхнього зовнішнього вигляду."
//   );
// }
// document.querySelector("#html").addEventListener("click", html);
// document.querySelector("#css").addEventListener("click", css);
//     </script>
// </body>
// </html>

//***3***
//Написати функцію магазин, яка отримує назву товару, ціну за кг і кількість товару
//функція має повертати назву товару і вартість
//перевірити на варіантах:
//1) banana 30, 4,5
//2) cherry 58, 1,3
//3) orange 89. 3,4

//Рішення
// function calculateTotalCost(productName, pricePerKg, quantity) {
//     const totalCost = (pricePerKg * quantity).toFixed(2);
//     return `Назва товару: ${productName}, Вартість: ${totalCost}`;
// }
// const bananaCost = calculateTotalCost("banana", 30, 4.5);
// console.log(bananaCost);
// const cherryCost = calculateTotalCost("cherry", 58, 1.3);
// console.log(cherryCost);
// const orangeCost = calculateTotalCost("orange", 89, 3.4);
// console.log(orangeCost);
