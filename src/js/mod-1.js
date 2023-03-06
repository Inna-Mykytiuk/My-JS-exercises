// ## Example 1 - Ввод пользователя и ветвления

// Используя конструкцию if..else и prompt, напиши код, который будет спрашивать:
// `"Какое официальное название JavaScript?"`. Если пользователь вводит
// `ECMAScript`, то показывай alert со строкой `"Верно!"`, в противном случае -
// `"Не знаете? ECMAScript!"`

// const officialName = prompt('Какое официальное название JavaScript?');

// if (officialName == `ECMAScript`) {
//   alert('Верно!');
// } else {
//   alert(`Не знаете? ECMAScript!`);
// }

// ## Example 2 - Отображение времени (if...else)

// Напиши скрипт для отображения часов и минут в консоли браузера в виде строки
// формата `"14 ч. 26 мин."`. Если значение переменной `minutes` равно `0`, то
// выводи строку `"14 ч."`, без минут.

// const hours = 14;
// const minutes = 26;
// let timeString;

// if (minutes === 0) {
//   timeString = `${hours} год`;
// } else {
//   timeString = `${hours}год ${minutes}хв`;
// }

// const minutes = 74; // 1 год 14 хв
// const minutes = 1023; // ?
// const minutesValue = minutes % 60;
// const hours = Math.floor(minutes / 60);
// console.log(`${hours}:${minutesValue}`);
// console.log(`${hours}год ${minutesValue}хв`);

// ```

// ## Example 3 - Ветвеления

// Напиши скрипт, который выводит в консоль строку `"Это положительное число"`,
// если в prompt пользователь ввел число больше нуля. Если был введен ноль, выводи
// в консоль строку `"Это ноль"`. Если передали отрицательное число, в консоли
// должна быть строка `"Это отрицательное число"`.

// ```js
// const userInput = prompt('Введите число');
// // ```

// if (userInput >= 0) {
//   console.log('Это положительное число');
// } else {
//   console.log('Это отрицательное число');
// }

// ## Example 4 - Вложенные ветвления

// Напиши скрипт, который сравнивает числа в переменных `a` и `b`. Если оба
// значения больше `100`, то выведи в консоль максимальное из них. В противном
// случае в консоли должна быть сумма значения `b` и числа 512.

// ```js
// const a = 120;
// const b = 180;
// // ```

// if (a && b > 100 && a > b) {
//   console.log(a);
// } else if (a && b > 100 && a < b) {
//   console.log(b);
// } else {
//   const sum = b + 512;
//   console.log(sum);
// }

// ## Example 5 - if...else и логические операторы

// Напиши скрипт который будет выводить в консоль браузера строку в зависимости от
// значения переменной `hours`.

// Если значение переменной `hours`:

// - меньше `17`, выводи строку `"Pending"`
// - больше либо равно `17` и меньше либо равно 24, выводи строку `"Expires"`
// - больше `24` , выводи строку `"Overdue"`

// ```js
// const hours = 10;
// ```

// ## Example 6 - Дедлайн сдачи проекта (if...else)

// Напиши скрипт для отображения времени дедлайна сдачи проекта. Используй
// конструкцию `if...else`.

// - Eсли до дедлайна 0 дней - выведи строку `"Сегодня"`
// - Eсли до дедлайна 1 день - выведи строку `"Завтра"`
// - Eсли до дедлайна 2 дня - выведи строку `"Послезавтра"`
// - Eсли до дедлайна 3+ дней - выведи строку `"Дата в будущем"`

// ```js
// const daysUntilDeadline = 5;
// // Пиши код ниже этой строки
// ```

// ## Example 7 - Дедлайн сдачи проекта (switch)

// Выполни рефакторинг кода задачи номер 5 используя `switch`.

// ```js
const daysUntilDeadline = 2;

// if (daysUntilDeadline === 0) {
//   console.log('Сегодня');
// } else if (daysUntilDeadline === 1) {
//   console.log('Завтра');
// } else if (daysUntilDeadline === 2) {
//   console.log('Послезавтра');
// } else {
//   console.log('Дата в будущем');
// }
// ```

// switch (daysUntilDeadline) {
//   case 0:
//     console.log('Сегодня');
//     break;
//   case 1:
//     console.log('Завтра');
//     break;
//   case 2:
//     console.log('Завтра');
//     break;
//   default:
//     console.log('Дата в будущем');
//     break;
// }

// ## Example 8 - Цикл for

// Напиши цикл for который выводит в консоль браузера числа по возрастанию от `min`
// до `max`, но только если число кратное `5`.

// ```js
// const max = 100;
// const min = 20;

// for (let i = min; i <= max; i += 5) {
//   if (i % 5 === 0) {
//     console.log(i);
//   }
// }

// for (let i = min; i <= max; i += 1) {
//   if (i % 5 === 0) {
//     console.log(i);
//   }
// }

// for (let i = min; i <= max; i += 5) {
//   console.log(i);
// }

// let i = min;

// while (i <= max) {
//   if (i % 5 === 0) {
//     console.log(i);
//   }
//   i += 1;
// }

// let i = min;

// do {
//   if (i % 5 === 0) {
//     console.log(i);
//   }
//   i += 1;
// } while (i <= max);

// const password = "admin";
// let userPassword;

// do {
//   userPassword = prompt("Enter password");
//   console.log(userPassword);
// } while (true);

// const result = 2 + 3; // 5

// function add() {
//   return 2 + 3;
// }

// console.log(add());

// ```

// ## Example 9 - Ввод пользователя и ветвления

// Напиши скрипт, который будет спрашивать логин с помощью `prompt` и логировать
// результат в консоль браузера.

// - Если посетитель вводит `"Админ"`, то `prompt` запрашивает пароль
// - Если ничего не введено или нажата клавиша Esc - вывести строку `"Отменено"`
// - В противном случае вывести строку `"Я вас не знаю"`

// Пароль проверять так:

// - Если введён пароль `"Я админ"`, то вывести строку `"Здравствуйте!"`
// - Иначе выводить строку `"Неверный пароль"`

// const password = 'Админ';
// const userPass = prompt('Хто ви?');

// if (userPass == password) {
//   prompt('Введіть пароль');
//   if (prompt == 'Я админ') {
//     alert('Здравствуйте!');
//   } else {
//     alert('Неверный пароль');
//   }
// } else if (prompt == '') {
//   alert('Отменено');
// } else {
//   alert('Я вас не знаю');
// }
