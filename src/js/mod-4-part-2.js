/////////////////////////////////// lesson 2 ////////////////////////////////////////////////

// const allCourses = [
//   'HTML',
//   'CSS',
//   'HTML',
//   'JavaScript',
//   'CSS',
//   'React',
//   'NodeJS',
//   'SQL',
//   'Python',
// ];

//Отримання унікальних значень
//------v1-----
// const uniqueCourses = allCourses.filter(
//   (course, index, array) => array.indexOf(course) === index
// );
//-------v2------
// const uniqueCourses = [...new Set(allCourses)];

// console.log(uniqueCourses);
// 1) course = HTML, index = 0, array = ['HTML', 'CSS', 'HTML','JavaScript', 'CSS', 'React', 'NodeJS', 'SQL', 'Python'] => 0 === 0 => ['HTML']
// 2) course = CSS, index = 1, array = ['HTML', 'CSS', 'HTML','JavaScript', 'CSS', 'React', 'NodeJS', 'SQL', 'Python'] => 1 === 1 => ['HTML','CSS]
// 3) course = HTML, index = 2, array = ['HTML', 'CSS', 'HTML','JavaScript', 'CSS', 'React', 'NodeJS', 'SQL', 'Python'] => 0 === 2 => ['HTML','CSS']
// 4) course = JavaScript, index = 3, array = ['HTML', 'CSS', 'HTML','JavaScript', 'CSS', 'React', 'NodeJS', 'SQL', 'Python'] => 3 === 3 => ['HTML','CSS','JavaScript']
// 5) course = CSS, index = 4, array = ['HTML', 'CSS', 'HTML','JavaScript', 'CSS', 'React', 'NodeJS', 'SQL', 'Python'] => 1 === 4 => ['HTML','CSS','JavaScript']

// const LOW_SCORE = 15;
// const HIGH_SCORE = 70;

// const students = [
//   { name: 'Bob', score: 45 },
//   { name: 'Alice', score: 25 },
//   { name: 'John', score: 60 },
//   { name: 'Jane', score: 70 },
//   { name: 'Mary', score: 90 },
// ];

// const filtered = students.filter(
//   student => student.score > HIGH_SCORE && student.score
// );
// console.table(filtered);

// // const average = students.filter(
// //   (student) => student.score >= LOW_SCORE && student.score < HIGH_SCORE
// // );

// const average = students.filter(
//   ({score}) => score >= LOW_SCORE && score < HIGH_SCORE
// );

// const newArray = []
// for (let student of student) {
//   if (student.score >= LOW_SCORE && student.score < HIGH_SCORE) {
//     newArray.push(student)
//   }
// }

// const tweets = [
//   { id: "000", likes: 5, tags: ["js", "nodejs"] },
//   { id: "001", likes: 2, tags: ["html", "css"] },
//   { id: "002", likes: 17, tags: ["html", "js", "nodejs"] },
//   { id: "003", likes: 8, tags: ["css", "react"] },
//   { id: "004", likes: 0, tags: ["js", "nodejs", "react"] },
// ];

// const tags = tweets.reduce((allTags, tweet) => {
//   allTags.push(...tweet.tags);

//   return allTags;
// }, []);

// const tags = tweets.reduce((allTags, tweet) => allTags.concat(tweet.tags), []);

// 1) allTags = [] => tweet = { id: "000", likes: 5, tags: ["js", "nodejs"] } => allTags.push("js", "nodejs") => allTags = ["js", "nodejs"]
// 2) allTags = ["js", "nodejs"] => tweet = { id: "001", likes: 2, tags: ["html", "css"] } => allTags.push("html", "css") => allTags = ["js", "nodejs", "html", "css"]
// 3) allTags = ["js", "nodejs", "html", "css"] => tweet = { id: "002", likes: 17, tags: ["html", "js", "nodejs"] } => allTags.push("html", "js", "nodejs") => allTags = ["js", "nodejs", "html", "css", "html", "js", "nodejs"]
// 4) allTags = ["js", "nodejs", "html", "css", "html", "js", "nodejs"] => tweet = { id: "003", likes: 8, tags: ["css", "react"] } => allTags.push("css", "react") => allTags = ["js", "nodejs", "html", "css", "html", "js", "nodejs", "css", "react"]
// 5) allTags = ["js", "nodejs", "html", "css", "html", "js", "nodejs", "css", "react"] => tweet = { id: "004", likes: 0, tags: ["js", "nodejs", "react"] } => allTags.push("js", "nodejs", "react") => allTags = ["js", "nodejs", "html", "css", "html", "js", "nodejs", "css", "react", "js", "nodejs", "react"]

// console.log(tags)

// # Модуль 4. Занятие 8. Перебирающие методы массива

// ## Коллекция объектов для всех примеров с автомобилями

// ```js
const cars = [
  {
    make: 'Honda',
    model: 'CR-V',
    type: 'suv',
    amount: 14,
    price: 24045,
    onSale: true,
  },
  {
    make: 'Honda',
    model: 'Accord',
    type: 'sedan',
    amount: 2,
    price: 22455,
    onSale: true,
  },
  {
    make: 'Mazda',
    model: 'Mazda 6',
    type: 'sedan',
    amount: 8,
    price: 24195,
    onSale: false,
  },
  {
    make: 'Mazda',
    model: 'CX-9',
    type: 'suv',
    amount: 7,
    price: 31520,
    onSale: true,
  },
  {
    make: 'Toyota',
    model: '4Runner',
    type: 'suv',
    amount: 19,
    price: 34210,
    onSale: false,
  },
  {
    make: 'Toyota',
    model: 'Sequoia',
    type: 'suv',
    amount: 16,
    price: 45560,
    onSale: false,
  },
  {
    make: 'Toyota',
    model: 'Tacoma',
    type: 'truck',
    amount: 4,
    price: 24320,
    onSale: true,
  },
  {
    make: 'Ford',
    model: 'F-150',
    type: 'truck',
    amount: 11,
    price: 27110,
    onSale: true,
  },
  {
    make: 'Ford',
    model: 'Fusion',
    type: 'sedan',
    amount: 13,
    price: 22120,
    onSale: true,
  },
  {
    make: 'Ford',
    model: 'Explorer',
    type: 'suv',
    amount: 6,
    price: 31660,
    onSale: false,
  },
];

// const models = cars.map(car => car.model);
// console.log('models', models);
// ```
// ## Example 1 - Метод map

// Пусть функция `getModels` возвращает массив моделей (поле model) всех
// автомобилей.

// ```js

// function getModels(cars) {
//   return cars.map(function ({ model }) {
//     return model;
//   });
// }

// function getModels(cars) {
//   return cars.map(({ model }) => model);
// }

// const getModels = cars => cars.map(({ model }) => model);

// 1) car = {
//   make: "Honda",
//   model: "CR-V",
//   type: "suv",
//   amount: 14,
//   price: 24045,
//   onSale: true,
// } => model = "CR-V" => [].push("CR-V") => ["CR-V"]
// 2) car = {
//   make: "Honda",
//   model: "Accord",
//   type: "sedan",
//   amount: 2,
//   price: 22455,
//   onSale: true,
// } => model = "Accord" => ["CR-V"].push("Accord") => ["CR-V", "Accord"]

// const getModels = cars => {};

// console.table(getModels(cars));
// ```

// ## Example 2 - Метод map

// Пусть функция `makeCarsWithDiscount` возвращает новый массив объектов с изменным
// значением свойства `price` в зависимости от переданной скидки.

// ```js

// function makeCarsWithDiscount(cars, discount) {
//   return cars.map(function (car) {
//     return {
//       ...car,
//       price: car.price * (1 - discount), // 0.8 //0.6
//     };
//   });
// }

// const makeCarsWithDiscount = (cars, discount) =>
//   cars.map(car => ({ ...car, price: car.price * (1 - discount) }));

// const discount20 = makeCarsWithDiscount(cars, 0.2);

// console.table(makeCarsWithDiscount(cars, 0.2));
// console.table(makeCarsWithDiscount(cars, 0.4));
// ```

// ## Example 3 - Метод filter

// Пусть функция `filterByPrice` возвращает массив автомобилей цена которых меньше
// чем значение параметра `threshold`.

// ```js
// const filterByPrice = (cars, threshold) =>
//   cars.filter(({ price }) => price < threshold);

// console.table("cars", cars);
// console.table(filterByPrice(cars, 30000));
// console.table(filterByPrice(cars, 25000));
// ```

// ## Example 4 - Метод filter

// Пусть функция `getCarsWithDiscount` возвращает массив автомобилей свойство
// onSale которых true.

// const getCarsWithDiscount = cars => cars.filter(car => car.onSale === true);
// console.table(getCarsWithDiscount(cars));
// console.table('cars', cars);
// ```js
// const getCarsWithDiscount = (cars) =>
//   cars.filter(({ onSale }) => onSale === true);

// const getCarsWithDiscount = (cars) => cars.filter(({ onSale }) => onSale);

// console.table("cars", cars);
// console.table(getCarsWithDiscount(cars));
// ```

// ## Example 5 - Метод filter

// Пусть функция `getCarsWithType` возвращает массив автомобилей тип которых
// совпадает со значением параметра `type`.

// const carType = (cars, type) => cars.filter(car => car.type === type);
// console.table(carType(cars, 'sedan'));
// ```js
// const getCarsWithType = (cars, type) =>
//   cars.filter(({ type: carType }) => carType === type);

// console.table(getCarsWithType(cars, "suv"));
// console.table(getCarsWithType(cars, "sedan"));
// ```

// ## Example 6 - Метод find

// ```js
// const getCarByModel = (cars, model) => cars.find((car) => car.model === model);

// console.log(getCarByModel(cars, "F-150"));
// console.log(getCarByModel(cars, "CX-9"));

// const getCarByPrice = (cars, minPrice, maxPrice) =>
//   cars.filter((car) => car.price >= minPrice && car.price <= maxPrice);

// console.table(getCarByPrice(cars, 25000, 30000));

// const getCarByPriceAndModel = (cars, price, model) =>
//   cars.filter((car) => car.price <= price && car.model === model);

// console.table(getCarByPriceAndModel(cars, 25000, "CR-V"));

// const getCarByPriceAndModel = (cars, minPrice, maxPrice, models) =>
//   cars.filter(
//     ({ price, model }) =>
//       price <= maxPrice && price >= minPrice && models.includes(model)
//   );

// console.table(
//   getCarByPriceAndModel(cars, 20000, 30000, ["CR-V", "CX-9", "F-150", "CX-7"])
// );

// ```

// ## Example 7 - Метод sort

// Пусть функция `sortByAscendingAmount` возвращает новый массив автомобилей
// отсортированный по возврастанию значения свойства `amount`.

// ```js
// const sortByAscendingAmount = (cars) =>
//   [...cars].sort((a, b) => a.amount - b.amount);

// [{ amount: 2 }, { amount: 1 }, { amount: 3 }];

// const sortByAscendingAmount = (cars) =>
//   [...cars].sort((a, b) => (a.amount > b.amount ? 12 : -15));
// // 1 ) 2 > 1 => true => 12 => 12 > 0 => [{ amount: 1 }, { amount: 2 }]
// // 2) 2 > 3 => false => -15 => -15 > 0 => [{ amount: 1 }, { amount: 2 }, { amount: 3 }]

// console.table(sortByAscendingAmount(cars));
// ```

// ## Example 8 - Метод sort

// Пусть функция `sortByDescendingPrice` возвращает новый массив автомобилей
// отсортированный по убыванию значения свойства `price`.

// ```js
// const sortByDescendingPrice = cars => {
//   return [...cars].sort((a, b) => b.price - a.price);
// };

// console.table(sortByDescendingPrice(cars));
// ```

// ## Example 9 - Метод sort

// Пусть функция `sortByModel` возвращает новый массив автомобилей отсортированный
// по названию модели в алфавитном и обратном алфавитном порядке, в засисимости от
// значения параметра `order`.

// ```js
// const sortByModel = (cars) =>
//   [...cars].sort((a, b) => b.model.localeCompare(a.model));

// console.table(sortByModel(cars));
// ```

// ## Example 10 - Метод reduce

// Пусть функция `getTotalAmount` возвращает общее количество автомобилей(значение
// свойств `amount`).

// [{
//     make: "Honda",
//     model: "CR-V",
//     type: "suv",
//     amount: 14,
//     price: 24045,
//     onSale: true,
//   },
//   {
//     make: "Honda",
//     model: "Accord",
//     type: "sedan",
//     amount: 2,
//     price: 22455,
//     onSale: true,
//   }]

// ```js

// let total = 0;
// for (let car of cars) {
//   total += car.amount;
// }
// console.log(total);

// const tags = [
//   ["HTML", "JS"],
//   ["CSS", "TypeScript"],
//   ["React", "Next"],
// ];

// const getTotalAmount = (cars) => cars.reduce((acc, car) => acc + car.amount, 0);

// console.log(tags.reduce((acc, tag) => acc.concat(tag), []));
// 1) [].push(["HTML", "JS"]) => ["HTML", "JS"]
// 2) ["HTML", "JS"].push(["CSS", "TypeScript"]) => ["HTML", "JS","CSS", "TypeScript"]

// 1) acc = 0 => amount = 14 => 0 + 14
// 2) acc = 14 => amount = 2 => 14 + 2
// return 16

// console.log(getTotalAmount(cars));
// ```

// ## Example 11 - Цепочки методов

// Пусть функция `getAvailableCarNames` возвращает массив моделей автомобилей, но
// только тех, которые сейчас на распродаже.

// ```js
// const getModelsOnSale = cars => {};

// console.table(getModelsOnSale(cars));
// ```

// ## Example 12 - Цепочки методов

// Пусть функция `getSortedCarsOnSale` возвращает массив автомобилей на распродаже
// (свойство onSale), отсортированных по возрастанию цены.

// ```js
// const getSortedCarsOnSale = cars => {};

// console.table(getSortedCarsOnSale(cars));
// ```
