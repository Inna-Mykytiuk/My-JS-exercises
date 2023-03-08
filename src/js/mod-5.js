// // const user = {
// //   name: "John",
// //   age: 30,
// //   // sayHello() {
// //   //   console.log(`Hello, my name is ${this.name}`);
// //   // },
// //   sayHello: function () {
// //     // this
// //     console.log(`Hello, my name is ${this.name}`);
// //   },
// // };

// // // console.log(user.name); // John
// // // console.log(user.age); // 30
// // console.log(user.sayHello()); // [Function: sayHello]

// // const objA = {
// //   showThis() {
// //     console.log(this);
// //   },
// // };

// // const objB = {
// //   foo: objA.showThis(), // foo: undefined
// //   // foo() {
// //   // this - context of objB
// //   // console.log(this)
// //   // }
// // };

// // function showThis() {
// //   console.log(this);
// // }

// // const user = {
// //   name: "John",
// //   age: 30,
// // };

// // // showThis(); // window | undefined

// // const bindShowThis = showThis.bind(user);
// // bindShowThis();

// // // console.log("objA", objA.logCtx); // [Function: logCtx]
// // console.log("objB", objB.foo); // [Function: logCtx]
// // const customer = {
// //   firstName: "Jacob",
// //   lastName: "Mercer",
// //   getFullName() {
// //     console.log("this", this);
// //     return `${this.firstName} ${this.lastName}`;
// //   },
// // };

// // function makeMessage(callback) {
// //   // callback() - це виклик методу getFullName без об'єкта
// //   console.log(`Обробляємо заявку від ${callback()}.`);
// // }

// // const bindedCallback = customer.getFullName.bind(customer);

// // makeMessage(bindedCallback); // Буде помилка у виклику функції

// // const somePeople = {
// //   name: "Serhii",
// //   prof: "hronometr",
// // };

// // function helloMyFriend(args) {
// //   console.log(`hello, ${this.name} ` + args);
// // }

// // const myBind = function (fn) {
// //   // this
// //   const context = this;
// //   return function (...args) {
// //     // this
// //     return fn.apply(context, args);
// //   };
// // };

// // Object.prototype.myBinsProto = myBind;

// // const tesMySelfBind = somePeople.myBinsProto(helloMyFriend);
// // tesMySelfBind(", my dear friend");

// // const showThis = () => {
// //   console.log(this); // window
// // };

// // showThis();

// // # Модуль 5. Занятие 9. Контекст вызова функции и this

// // ## Example 1 - Мастерская драгоценностей

// // Напишите метод `calcTotalPrice(stoneName)`, который принимает название камня и
// // рассчитывает и возвращает общую стоимость камней с таким именем, ценой и
// // количеством из свойства `stones`.

// // ```js
// const chopShop = {
//   stones: [
//     { name: 'Emerald', price: 1300, quantity: 4 },
//     { name: 'Diamond', price: 2700, quantity: 3 },
//     { name: 'Sapphire', price: 1400, quantity: 7 },
//     { name: 'Ruby', price: 800, quantity: 2 },
//   ],
//   calcTotalPrice(stoneName) {
//     //вводимо нову константу для this та використаємо метод find для пошуку каменя за іменем
//     const stone = this.stones.find(({ name }) => name === stoneName);
//     // обчислюэмо ціну
//     return stone.price * stone.quantity;
//   },
// };

// console.log(chopShop.calcTotalPrice('Emerald')); // 5200
// console.log(chopShop.calcTotalPrice('Diamond')); // 8100
// console.log(chopShop.calcTotalPrice('Sapphire')); // 9800
// console.log(chopShop.calcTotalPrice('Ruby')); // 1600
// // ```

// // ## Example 2 - Телефонная книга

// // Выполните рефакторинг методов объекта `phonebook` чтобы код заработал.

// // ```js
// const phonebook = {
//   contacts: [],
//   add(contact) {
//     const newContact = {
//       list: 'default',
//       ...contact,
//       id: this.generateId(),
//       createdAt: this.getDate(),
//     };
//     this.contacts.push(newContact);
//   },
//   generateId() {
//     return '_' + Math.random().toString(36).substr(2, 9);
//   },
//   getDate() {
//     return Date.now();
//   },
// };

// console.log(
//   phonebook.add({
//     name: 'Mango',
//     email: 'mango@mail.com',
//     list: 'friends',
//   })
// );
// console.log(
//   phonebook.add({
//     name: 'Poly',
//     email: 'poly@hotmail.com',
//   })
// );

// console.log(phonebook.contacts);
// // ```

// // ## Example 3 - Калькулятор

// // Создайте объект `calculator` с тремя методами:

// // - `read(a, b)`- принимает два значения и сохраняет их как свойства объекта.
// // - `add()` - возвращает сумму сохранённых значений.
// // - `mult()` - перемножает сохранённые значения и возвращает результат.

// // ```js
const calculator = {
  read(a, b) {
    this.a = a;
    this.b = b;
  },

  add() {
    return this.a + this.b;
  },
  mult() {
    return this.a * this.b;
  },
};
// // // ```

// // calculator.read(5, 4);
// // console.log(calculator);
// // console.log(calculator.add()); // 9
// // console.log(calculator.mult()); // 20
// /////////////////////////////////////////////////////////////////////////////////////////////////

// function User(name, age, status) {
//   // this = {}
//   this.name = name;
//   this.age = age;
//   this.status = "active";
//   //   this.status = status;
//   // return this; // this = {name, age, status}
// }

// User.prototype.sayHello = function () {
//   console.log(`Hello, I am ${this.name}`);
// };

// class User {
//   constructor(name, age, status) {
//     // this = {}
//     this.name = name;
//     this.age = age;
//     this.status = "active";
//     // return this; // this = {name, age, status}
//   }

//   sayHello() {
//     console.log(`Hello, I am ${this.name}`);
//   }
// }

// function Array(...args) {
//   this.args = args;
//   this.length = args.length;
// }

// Array.prototype.map;
// Array.prototype.push;
// Array.prototype.filter;

// 1) User() // this = undefined || window
// 2) new User() // this = {}

// const Bob = new User("Bob", 30, "active"); // { name: "Bob", age: 30 }
// // 1)  this = {} => {name: 'Bob"} => {name: 'Bob', age: 30} => {name: 'Bob', age: 30, status: 'active'}  => return this
// // 2) const Bob ={name: 'Bob', age: 30, status: 'active'}
// // 3) Bob.prototype = User.prototype
// // 4) Bob може користуватися методом SayHello()
// const Alice = new User("Alice", 25, "pending"); // { name: "Alice", age: 25 }
// const Mary = new User("Mary", 20, "unactive"); // { name: "Mary", age: 20 }

// function Student(user) {
//   this.user = user;
// }

// const student = new Student(Bob);

// const numbers = [1, 2, 3, 4, 5];
// const numbers = new Array(1, 2, 3, 4, 5);

// const user = {
//     name: "Bob",
//     age: 30,
// }

// const user = new Object ()

// const name = "Bob".toUpperCase();

// const name = new String("Bob");

// Array
// Object
// String
// Number
// Boolean

// console.log(numbers);

// console.log(Bob);
// console.log(Alice);
// console.log(Mary);
// Bob.sayHello();
// Alice.sayHello();
// Mary.sayHello();

// class User {
//   // Объявление и инициализация статического свойства
//   static Roles = {
//     ADMIN: "admin",
//     EDITOR: "editor",
//     STUDENT: "student",
//     MENTOR: "mentor",
//   };

//   //   static getRole(user) {
//   //     return user.role;
//   //   }

//   #email;
//   #role;

//   constructor({ email, role }) {
//     this.#email = email;
//     this.#role = role;
//   }

//   get role() {
//     return this.#role;
//   }

//   set role(newRole) {
//     this.#role = newRole;
//   }
// }

// const mango = new User({
//   email: "mango@mail.com",
//   role: User.Roles.ADMIN,
// });

// console.log(mango);
// // console.log(User.Roles);

// // console.log(mango.Roles); // undefined
// // console.log(User.Roles); // { ADMIN: "admin", EDITOR: "editor" }

// console.log(mango.role); // "admin"
// console.log(mango.email);
// mango.role = User.Roles.EDITOR;
// console.log(mango.role); // "editor"
// class User {
//   static #takenEmails = [];

//   static isEmailTaken(email) {
//     return User.#takenEmails.includes(email);
//   }

//   #email;

//   constructor({ email }) {
//     this.#email = email;
//     User.#takenEmails.push(email);
//   }
// }

// const mango = new User({ email: "mango@mail.com" });

// console.log(User.isEmailTaken("poly@mail.com")); // false
// console.log(User.isEmailTaken("mango@mail.com")); // true
