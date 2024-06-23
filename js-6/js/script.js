//***1***
//Створити телефонну книгу
//- створити початковий клас Abonent, де зберігатимуться ім*я і номер
//- створити set який прийматиме телефон і номер
//- створити get який виводитиме данні про абонента
//- створити три різних юзери
//- вивести данні

//Рішення

class Abonent {
  constructor(abonent) {
    this.name = abonent.name;
    this.number = abonent.number;
  }

  set name(newName) {
    this.Name = newName;
  }

  set number(newNumber) {
    this.Number = newNumber;
  }

  get name() {
    return `Abonent name: ${this.Name}; Abonent Number: ${this.Number};`;
  }
}

const user1 = new Abonent({
  name: "Дмитро",
  number: "380672515372",
});

const user2 = new Abonent({
  name: "Мирослава",
  number: "380662990680",
});

const user3 = new Abonent({
  name: "Анастасія",
  number: "380674034058",
});

console.log(user1, user2, user3);
