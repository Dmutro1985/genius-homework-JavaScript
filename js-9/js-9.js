//***1***
//Напишіть такий JavaScript, щоб після натискання на кнопку button, елемент
//<div id="text"> зникав.

//Рішення
//<!DOCTYPE HTML>
//<html>
//<head>
// <meta charset="utf-8">
//</head>
//<body>
//<input type="button" id="hider" value="Натисніть, щоб текст зник" />
//<div id="text">Текст</div>
//<script>
// Тут не має значення, як ми приховуємо текст
// Також можна використати style.display:
//document.getElementById('hider').onclick = function() {
// document.getElementById('text').hidden = true;
//}
//</script>
//</body>
//</html>

//***2***
//Напишіть такий код, щоб після натискання на кнопку, вона зникала.

//Рішення
//<input type="button" onclick="this.hidden=true" value="Сховати">

//***3***
//Створіть дерево, яке показує/приховує дочірні вузли при кліці

//Рішення
//<!DOCTYPE HTML>
//<html>

//<head>
//<style>
//.tree span:hover {
//  font-weight: bold;
//}

//.tree span {
// cursor: pointer;
//}
//</style>
//<meta charset="utf-8">
//</head>

//<body>

//<ul class="tree" id="tree">
//<li>Батьківський елемент 1
// <ul>
//<li>Дочірній елемент 1-1
// <ul>
//  <li>Дочірній елемент 1-1-1</li>
// <li>Дочірній елемент 1-1-2</li>
// <li>Дочірній елемент 1-1-3</li>
// <li>Дочірній елемент 1-1-4</li>
//</ul>
//</li>
//<li>Дочірній елемент 1-2
// <ul>
//<li>Дочірній елемент 1-2-1</li>
//<li>Дочірній елемент 1-2-2</li>
// <li>Дочірній елемент 1-2-3</li>
// </ul>
//</li>
//</ul>
//</li>
//<li>Батьківський елемент 2
// <ul>
//<li>Дочірній елемент 2-1
// <ul>
// <li>Дочірній елемент 2-1-1</li>
// <li> Дочірній елемент 2-1-2</li>
// </ul>
//</li>
// <li> Дочірній елемент 2-2
// <ul>
//   <li> Дочірній елемент 2-2-1</li>
// </ul>
// </li>
//</ul>
//</li>
//</ul>

//<script>
// помістіть кожен текстовий вузол у елемент <span>
// він займає саме те місце, яке необхідне для тексту,
//for (let li of tree.querySelectorAll('li')) {
// let span = document.createElement('span');
// li.prepend(span);
// span.append(span.nextSibling); // поміщаємо текстовий вузол у span
// }

// ловимо кліки на всьому дереві
//tree.onclick = function(event) {

// if (event.target.tagName != 'SPAN') {
//return;
// }

// let childrenContainer = event.target.parentNode.querySelector('ul');
// if (!childrenContainer) return; // дітей немає

// childrenContainer.hidden = !childrenContainer.hidden;
// }
//</script>
//</body>
//</html>
