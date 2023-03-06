//----------1------------
// const genres = ['Jazz', 'Blues'];
// genres.push('Rock-and-Roll');

// console.log(genres[0]);
// console.log(genres[genres.length - 1]);
// console.log(genres.shift());
// console.log(genres.unshift('Reggy', 'Cantry'));

// const spliced = genres.splice(0, 1);
// console.log(spliced);

// genres.splice(0, 0, 'Reggy', 'Cantry');
// console.log(genres);

//--------------2---------

// const fruits = ['apple', 'lemon', 'cherry', 'orange', 'strawberry'];

// for (let i = 0; i < fruits.length; i += 1) {
//визначаємо індекс
//   const index = i + 1;
//   const elm = fruits[i];
//   console.log(`${index}:${elm}`);
// }

// for (let fruit of fruits) {
//визначаємо індекс
//   const index = fruits.indexOf(fruit) + 1;//додаємо +1 щоб відлік починався з 1-ці
//   console.log(`${index}:${fruit}`);
// }

//----------3----------
//Визначити площу прямокутника
// const values = '8 11';

// const valuesArr = values.split(' ');

// // const result = valuesArr[0] * valuesArr[1];
// // переведення в число
// const result = Number(valuesArr[0]) * Number(valuesArr[1]);
// console.log(result);

//----------4----------
/*Напиши скрипт який виводить номер тел та імя. В змінних names phone збурігаються масиви даних і мен та номерів телефонів користувачів.
розділених комою. Кількість імен та номерів однакове */

// const names = 'John,Inna,Tokio,Jarvis';
// const phoneNumbers = '80933408477,80974455332,80965324876,80934398873';

// //розділяємо імена і номери ось так 'John'
// const namesArr = names.split(',');
// const phoneNumbArr = phoneNumbers.split(',');
// console.log(namesArr);
// console.log(phoneNumbArr);

//Перебираємо масив
// for (let name of namesArr) {
//визначаємо порядковий індекс кожного імені
//   const index = namesArr.indexOf(name);
//зіставляємо ім'я і номер
//   console.log(`${name}: ${phoneNumbArr[index]}`);
// }

//----------part-2---------

//function expression
//в цьому випадку функцію не можна викликати в довільному місці коду.
// const add = function (a, b) {
//   return a + b;
// };

// const result = add(5, 10);
// console.log('result', result);

// //function declaration
// //в цьому випадку функцію можна викликати в довільному місці коду...до функції чи після немає значення
// function arr() {
//   return a + b;
// }

// const numbers = [];

// const addNumber = function (array) {
//   const number = prompt('Add number');
//   array.push(number);
// };

// //return викристовуємо коли функція створює нову змінну, яку ми будемо викор. далі в коді

// addNumber(numbers);
// console.log('numbers', numbers);

//------1------

//Обчислення маси тіла

// function calcBMI() {
//   const weight = prompt('Enter your weight');
//   const height = prompt('Enter your height');

//   const bmi = weight / Math.pow(height, 2);

//   if (bmi < 18.5) {
//     alert('Insufficient body weight');
//   } else if (bmi >= 18.5 && bmi < 24.9) {
//     alert('Norma');
//   } else {
//     alert('Excess body weight');
//   }
// }

//розподіл на частинки

//функція збору даних
// function colectInfo() {
//   const weight = prompt('Enter your weight');
//   const height = prompt('Enter your height');
//   return [weight, height];
// }

// //функція вичислення
// function getBMI(array) {
//   const weight = array[0];
//   const height = array[1];
//   return weight / Math.pow(height, 2);
// }

// //функція виведення повідомлень
// function showresult(bmi) {
//   if (bmi < 18.5) {
//     alert('Insufficient body weight');
//   } else if (bmi >= 18.5 && bmi < 24.9) {
//     alert('Norma');
//   } else {
//     alert('Excess body weight');
//   }
// }

// //функція вичислення результату
// function calcBMI() {
//   const info = colectInfo();
//   //Збираємо дані
//   const result = showresult(info);
//   //Виводимо результат
//   showresult(result);
// }

// calcBMI();

//-------2----------

//Знаходимо найменше і найбільше число в масиві
//v1

// function findMaxNumber(array) {
//   return Math.max(...array);
// }

// // const newArr = [2, 5, 65, 13, 98];
// // const maxNumber = findMaxNumber(newArr);

// const maxNumber = findMaxNumber([2, 5, 65, 13, 98]);
// console.log(maxNumber);

// function findMinNumber(array) {
//   return Math.min(...array);
// }

// const minNumber = findMinNumber([2, 5, 65, 13, 98]);
// console.log(minNumber);

//v2

// function findMaxNumber(numbers) {
//   let maxNumb = numbers[0];

//   for (let number of numbers) {
//     if (maxNumb < number) {
//       maxNumb = number;
//     }
//   }
//   return maxNumb;
// }

// console.log(findMaxNumber([2, 5, 65, 13, 98]));

// function findMinNumber(numbers) {
//   let minNumb = numbers[0];
//   for (let number of numbers) {
//     if (minNumb > number) {
//       minNumb = number;
//     }
//   }
//   return minNumb;
// }

// console.log(findMinNumber([2, 5, 65, 13, 98]));

//--------3--------
//напиши функцію яка приймає довільну кількість аргументів і повертає їх середнє значення. Всі аргументи це числа
//...args приймає довільну кількість аргументів
// function calAverage(...args) {
//   //якщо довжина = 0, він пустий, то повертаємо 0
//   if (args.length === 0) {
//     return 0;
//   }
//   // задамо початкове значення
//   let sum = 0;
//   for (let i = 0; i < args.length; i++) {
//     //додаємо до початкового значення елемент(число)
//     sum += args[i];
//   }
//   //повертаємо
//   return sum / args.length;
// }

// const result = calAverage(2, 5, 8, 11);
// console.log(result);
