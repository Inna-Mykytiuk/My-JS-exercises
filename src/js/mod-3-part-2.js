// # Модуль 3 Занятие 6. Деструктуризация и rest/spread

// ## Example 1 - Деструктуризация

// Перепиши функцию так, чтобы она принимала один объект параметров, вместо набора
// независимых аргументов.

// ```js
function calcBMI({ weight, height }) {
  const numericWeight = Number(weight.replace(',', '.'));
  const numericHeight = Number(height.replace(',', '.'));
  return Number((numericWeight / numericHeight ** 2).toFixed(1));
}

function calcBMI(clientParams) {
  const { weight, height } = clientParams;
  const numericWeight = Number(weight.replace(',', '.'));
  const numericHeight = Number(height.replace(',', '.'));
  return Number((numericWeight / numericHeight ** 2).toFixed(1));
}

// // Было
// // console.log(calcBMI('88,3', '1.75'));
// // console.log(calcBMI('68,3', '1.65'));
// // console.log(calcBMI('118,3', '1.95'));

// // Ожидается
// console.log(
//   calcBMI({
//     weight: '88,3',
//     height: '1.75',
//   }),
// );
// console.log(
//   calcBMI({
//     weight: '68,3',
//     height: '1.65',
//   }),
// );
// console.log(
//   calcBMI({
//     weight: '118,3',
//     height: '1.95',
//   }),
// );
// ```

// ## Example 2 - Деструктуризация

// Перепиши функцию так, чтобы она принимала один объект параметров, вместо набора
// независимых аргументов.

// ```js
// function printContactsInfo(names, phones) {
//   const nameList = names.split(',');
//   const phoneList = phones.split(',');
//   for (let i = 0; i < nameList.length; i += 1) {
//     console.log(`${nameList[i]}: ${phoneList[i]}`);
//   }
// }

// function printContactsInfo({ names, phones }) {
//   const nameList = names.split(",");
//   const phoneList = phones.split(",");
//   for (let i = 0; i < nameList.length; i += 1) {
//     console.log(`${nameList[i]}: ${phoneList[i]}`);
//   }
// }

// function printContactsInfo(data) {
//   const { names, phones } = data;
//   const nameList = names.split(",");
//   const phoneList = phones.split(",");
//   for (let i = 0; i < nameList.length; i += 1) {
//     console.log(`${nameList[i]}: ${phoneList[i]}`);
//   }
// }

// // Было
// // printContactsInfo(
// //   'Jacob,William,Solomon,Artemis',
// //   '89001234567,89001112233,890055566377,890055566300',
// // );

// // Ожидается
// printContactsInfo({
//   names: 'Jacob,William,Solomon,Artemis',
//   phones: '89001234567,89001112233,890055566377,890055566300',
// });
// ```

// ## Example 3 - Глубокая деструктуризация

// Перепиши функцию так, чтобы она принимала один объект параметров, вместо набора
// независимых аргументов.

// ```js
// function getBotReport(companyInfo) {
//   return `${companyInfo.companyName} has ${
//     companyInfo.bots.repair + companyInfo.bots.defence
//   } bots in stock. Repair bots count is ${
//     companyInfo.bots.repair
//   }. Defence bots count is ${companyInfo.bots.defence}`;
// }

// function getBotReport(companyInfo) {
//   const companyName = companyInfo.companyName;
//   const repairBots = companyInfo.bots.repair;
//   const defenceBots = companyInfo.bots.defence;
//   return `${companyName} has ${
//     repairBots + defenceBots
//   } bots in stock. Repair bots count is ${repairBots}. Defence bots count is ${defenceBots}`;
// }

// function getBotReport(companyInfo) {
//   // this = undefined || window
//   // const companyInfo = {
//   // companyName: "Cyberdyne Systems",
//   //   bots: {
//   //     repair: 150,
//   //     defence: 50,
//   //   },
//   // }

//   const { companyName, bots } = companyInfo;
//   // const companyName = companyInfo.companyName;
//   // const bots = companyInfo.bots
//   const { repair: repairBots, defence: defenceBots } = bots;
//   // const repairBots = bots.repair
//   // const defenceBots = bots.defence
//   return `${companyName} has ${
//     repairBots + defenceBots
//   } bots in stock. Repair bots count is ${repairBots}. Defence bots count is ${defenceBots}`;
// }

// // // Было
// // // console.log(getBotReport('Cyberdyne Systems', 150, 50));

// // // Ожидается
// console.log(
//   getBotReport({
//     companyName: "Cyberdyne Systems",
//     bots: {
//       repair: 150,
//       defence: 50,
//     },
//   })
// ); // "Cyberdyne Systems has 200 bots in stock"
// // ```

// window.getBotReport({
//   companyName: "Cyberdyne Systems",
//   bots: {
//     repair: 150,
//     defence: 50,
//   },
// });

// const user = {
//   name: "Bob",
//   age: 23,
// };

// const { name, age } = user;

// ## Example 4 - Деструктуризация

// Перепиши функцию так, чтобы она принимала объект параметров со свойствами
// `companyName` и `stock` и выводила репорт о количестве товаров на складе любой
// компании.

// ```js
// // Решение
// function getStockReport({ companyName, stock }) {
//   let total = 0;
//   for (const value of Object.values(stock)) {
//     total += value;
//   }
//   return `${companyName} has ${total} items in stock`;
// }

// console.log(
//   getStockReport({
//     companyName: 'Cyberdyne Systems',
//     stock: {
//       repairBots: 150,
//       defenceBots: 50,
//     },
//   }),
// ); // "Cyberdyne Systems has 200 items in stock"

// console.log(
//   getStockReport({
//     companyName: 'Belacci',
//     stock: {
//       shoes: 20,
//       skirts: 10,
//       hats: 5,
//     },
//   }),
// ); // "Belacci has 35 item in stock"
// ```

// ## Example 5 - Операция spread

// const settings = {
//   theme: "light",
//   fontFamily: "default",
//   navbar: "fixed",
//   markdown: "basic",
// };

// const updatesettings = {
//   theme: "dark",
//   fontFamily: "monospace",
//   navbar: "static",
//   markdown: "basic",
// };

// function updateSettingsHandler(defaultSettings, userSettings) {
//   return {
//     ...defaultSettings,
//     ...userSettings,
//   };
// }

// const siteSettings = {
//   ...settings,
//   ...updatesettings,
// };

// const siteSettings = {
//   theme: "dark",
//   fontFamily: "monospace",
//   navbar: "static",
//   markdown: "basic",
// };

// // const technology = ["HTML", "CSS"];
// const programLanguages = ["Javascript", "Typescript"];
// // const frameworks = ["React", "Next"];
// // const fullStack = [...technology, ...programLanguages, ...frameworks];
// const fullStack = ["HTML", "CSS", ...programLanguages, "React", "Next"];

// ## Example 6 - Операция rest

// function getMargin() {
//   console.log(Array.from(arguments));
// }

// function getMargin(...args) {
//   console.log(args);
// }

// getMargin(12);
// getMargin(12, 15);
// getMargin(12, 15, 20);
// getMargin(12, 15, 20, 45);

// function getUserInfo(name, age, address, ...props) {}

// getUserInfo("Bob", 34, "London", "0987654321", "user@gmail.com");
// getUserInfo("Bob", 34, "London");

// 12
// 12 12
// 12 12 12
// 12 12 12 12

// ```

// Можно разобрать вот это тему Изменение имени переменной
// const firstBook = {
//   title: "The Last Kingdom",
//   coverImage:
//     "https://images-na.ssl-images-amazon.com/images/I/51b5YG6Y1rL.jpg",
// };

// const {
//   title: firstTitle, // const firstTitle = firstBook.title
//   // coverImage: firstCoverImage = "https://via.placeholder.com/640/480", // const firstCoverImage = firstBook.coverImage
// } = firstBook;
// const firstCoverImage = "https://via.placeholder.com/640/480";

// console.log(firstTitle); // The Last Kingdom
// console.log(firstCoverImage); // https://images-na.ssl-images-amazon.com/images/I/51b5YG6Y1rL.jpg

// const secondBook = {
//   title: "Сон смешного человека",
// };

// const {
//   title: secondTitle,
//   coverImage: secondCoverImage = "https://via.placeholder.com/640/480",
// } = secondBook;

// console.log(secondTitle); // Сон смешного человека
// console.log(secondCoverImage); // https://via.placeholder.com/640/480

// объясните пожалуйста что тут происходит
// function countProps(object) {
//   let propCount = 0;
//   // Change code below this line
//   for (const key in object) {
//     // object = firstBook
//     // key = title
//     // key = coverImage
//     if (object.hasOwnProperty(key)) {
//       propCount += 1; // = 2
//     }
//   }
//   // Change code above this line
//   return propCount; // 2
// }

// const firstBook = {
//   title: "The Last Kingdom",
//   coverImage:
//     "https://images-na.ssl-images-amazon.com/images/I/51b5YG6Y1rL.jpg",
// };

// countProps(firstBook);
// const first = { propA: 5, propB: 10, propC: 50 };
// const second = { propC: 15, propD: 20 };

// const third = { ...first, ...second };
// a 5, b 10, c 15, d 20
// console.log(third); // { propA: 5, propB: 10, propC: 15, propD: 20 }

// const fourth = { ...second, ...first };
//  d 20, a 5, b 10, c 50
// console.log(fourth); // { propA: 5, propB: 10, propC: 50, propD: 20 }

//-----spread-----

// let s1 = [1, 5, 4, 7];
// let s2 = [3, 8, 9, ...s1, 6, 9, 9];

// console.log('s2', s2);

// //копія масиву
// let s3 = [...s1];
// s3.push(99);
// console.log('s1', s1);
// console.log('s3', s3);

//видалення дублювань
// let s4 = [1, 5, 4, 7, 5, 7, 2, 1, 4];
// let s5 = [...new Set(s4)];
// console.log('s5', s5); //s5 (5) [1, 5, 4, 7, 2]

// //строка
// let s6 = 'abba';
// let s7 = [...s6];

// console.log('s7', s7); //s7 (4) ['a', 'b', 'b', 'a']

// //з обєктами

let b1 = {
  name: 'Inna',
  param1: 15,
};
let b2 = {
  name: 'Inna',
  param2: 15,
};

let resObj1 = { ...b1 };
let resObj2 = { ...b1, ...b2 };
console.log(resObj1); //{name: 'Inna', param1: 15}
console.log(resObj2); //{name: 'Inna', param1: 15, param2: 15}

//додавання властивостей
let b3 = { ...b1, bike: true };
console.log('b3', b3); //b3 {name: 'Inna', param1: 15, bike: true}

//resr ...args

function f1(a, ...b) {
  console.log('a', a); //a 1
  console.log('b', b); //b [2]
}
f1(1, 2);
f1(1, 2, 3, 4, 5, 6, 7); // a 1 b (6) [2, 3, 4, 5, 6, 7]

// приклад зі змінною
let [s10, ...s11] = [100, 200, 300, 400];
console.log('s11', s11); //s11 (3) [200, 300, 400]
