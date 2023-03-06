//Якщо значення властивості - це функція, така властивість називається методом об'єкта.
// ✅ Логічно і синтаксично згруповані сутності
// const bookShelf = {
//   books: ['The Last Kingdom', 'Dream Guardian'],
//   // Це метод об'єкта
//   getBooks() {
//     console.log('Цей метод буде повертати всі книги - властивість books');
//   },
//   // Це метод об'єкта
//   addBook(bookName) {
//     console.log('Цей метод буде додавати нову книгу у властивість books');
//   },
// };

/*Методи використовуються для роботи з властивостями об'єкта, їх зміни. Для доступу до об'єкта в методі використовується не ім'я змінної, наприклад bookShelf, а ключове слово this - контекст. Значенням this буде об'єкт перед «крапкою», тобто об'єкт, який викликав цей метод, у нашому випадку - це посилання на об'єкт bookShelf.*/
// const bookShelf = {
//   books: ["The Last Kingdom"],
//   getBooks() {
//     console.log(this);
//   },
// };

// // Перед крапкою знаходиться об'єкт bookShelf,
// // тому, викликаючи метод, this буде зберігати посилання на нього.
// bookShelf.getBooks(); // {books: ['The Last Kingdom'], getBooks: f}
// // Виклики методів
// bookShelf.getBooks();
// bookShelf.addBook('Нова книга');

/*Для того, щоб отримати доступ до властивостей об'єкта в методах, ми звертаємось до нього через this і далі, стандартно - «через крапку» до властивостей. */
// const bookShelf = {
//   books: ['The Last Kingdom'],
//   getBooks() {
//     return this.books;
//   },
//   addBook(bookName) {
//     this.books.push(bookName);
//   },
//   removeBook(bookName) {
//     const bookIndex = this.books.indexOf(bookName);
//     this.books.splice(bookIndex, 1);
//   },
// };

// console.log(bookShelf.getBooks()); // ["The Last Kingdom"]
// bookShelf.addBook('The Mist');
// bookShelf.addBook('Dream Guardian');
// console.log(bookShelf.getBooks()); // ['The Last Kingdom', 'The Mist', 'Dream Guardian']
// bookShelf.removeBook('The Mist');
// console.log(bookShelf.getBooks()); // ['The Last Kingdom', 'Dream Guardian']

// const book = {
//   title: 'The Last Kingdom',
//   author: 'Bernard Cornwell',
//   genres: ['historical prose', 'adventure'],
//   rating: 8.38,
// };

// for (const key in book) {
//   // Ключ
//   console.log(key);
//   // Значення властивості з таким ключем
//   console.log(book[key]);
// }

//--------------hasOwnProperty
// const book = {
//   title: 'The Last Kingdom',
//   author: 'Bernard Cornwell',
//   genres: ['historical prose', 'adventure'],
//   rating: 8.38,
// };

// for (const key in book) {
//   // Якщо це власна властивість - виконуємо тіло if
//   if (book.hasOwnProperty(key)) {
//     console.log(key);
//     console.log(book[key]);
//   }

//   // Якщо це невласна властивість - нічого не робимо
// }

// # Модуль 3. Занятие 1. Объекты

// ## Example 1 - Основы обьектов

// Напиши скрипт, который, для объекта `user`, последовательно:

// - добавляет поле `mood` со значением `'happy'`
// - заменяет значение `hobby` на `'skydiving'`
// - заменяет значение `premium` на `false`
// - выводит содержимое объекта `user` в формате `ключ:значение` используя
//   `Object.keys()` и `for...of`

// ### Код

// const user = {
//   name: 'Mango',
//   age: 20,
//   hobby: 'html',
//   premium: true,
// };

// user.mood = 'happy';
// user.hobby = 'skydiving';
// user.premium = false;

// //Отримуємо ключі через Object.keys
// const keys = Object.keys(user);
// console.log('keys', keys);

// //Отримуємо значення ключів через user[key]
// for (let key of keys) {
//   console.log(`${key}: ${user[key]}`);
// }

// ## Example 2 - метод Object.values()

// У нас есть объект, в котором хранятся зарплаты нашей команды. Напишите код для
// суммирования всех зарплат и сохраните результат в переменной sum. Должно
// получиться 390. Если объект `salaries` пуст, то результат должен быть 0.

// ### Код

// ```js
// const salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130,
// };
// // ```
// //v1
// //   let sum = 0;

// //   const values = Object.values(salaries);
// //   for (let value of values) {
// //     sum += value;
// // }

// // console.log(sum);

// //v2
// const salaries1 = {};

// const calcSalaries = function (salaries) {
//   //Виводимо значення ключів
//   const values = Object.values(salaries);
//   //Якщо обєкт порожній - виводимо 0
//   if (values.length === 0) {
//     return 0;
//   }

//   let sum = 0;
//   for (let value of values) {
//     sum += value;
//   }
//   return sum;
// };

// console.log(calcSalaries(salaries1));
// console.log(calcSalaries(salaries));

// ## Example 3 - Массив объектов

// Напишите ф-цию `calcTotalPrice(stones, stoneName)`, которая принимает массив
// обьектов и строку с названием камня. Ф-ция считает и возвращает общую стоимость
// камней с таким именем, ценой и количеством из обьекта

// ### Код

// ```js
// const stones = [
//   { name: 'Изумруд', price: 1300, quantity: 4 },
//   { name: 'Бриллиант', price: 2700, quantity: 3 },
//   { name: 'Сапфир', price: 400, quantity: 7 },
//   { name: 'Щебень', price: 200, quantity: 2 },
// ];
// // ```

// function calcTotalPrice(stones, stoneName) {
//   //обраний камінь невідомий
//   let targetstone = null;
//   //для кожного камня із колецкції робимо порівняння на збіг по імені
//   for (let stone of stones) {
//     if (stone.name === stoneName) {
//       // якщо в нас є такий камінь записуємо його в змінну
//       targetstone = stone;
//     }
//   }
//   //повертаємо загальну вартість каменю
//   return targetstone.price * targetstone.quantity;
// }
// console.log(calcTotalPrice(stones, 'Сапфир'));

// ## Example 4 - Комплексные задачи

// Напиши скрипт управления личным кабинетом интернет банка. Есть объект `account`
// в котором необходимо реализовать методы для работы с балансом и историей
// транзакций.

// ```js
// /*
//  * Типов транзацкий всего два.
//  * Можно положить либо снять деньги со счета.
//  */
const Transaction = {
  DEPOSIT: 'deposit',
  WITHDRAW: 'withdraw',
};

// /*
//  * Каждая транзакция это объект со свойствами: id, type и amount
//  */

const account = {
  // Текущий баланс счета
  balance: 0,

  // История транзакций
  transactions: [],

  /*
   * Метод создает и возвращает объект транзакции.
   * Принимает сумму и тип транзакции.
   */
  createTransaction(amount, type) {
    //створюємо і повертаємо обєкт(назва транзакції, тип, та створюємо айді з довжиною акаунтних транзакцій)
  },

  /*
   * Метод отвечающий за добавление суммы к балансу.
   * Принимает сумму танзакции.
   * Вызывает createTransaction для создания объекта транзакции
   * после чего добавляет его в историю транзакций
   */
  deposit(amount) {
    //додаємо до балансу амаунт
    //створюємо змінну транзакції і викликаємо його
    //додаємо в історію транзакцій
  },

  /*
   * Метод отвечающий за снятие суммы с баланса.
   * Принимает сумму танзакции.
   * Вызывает createTransaction для создания объекта транзакции
   * после чего добавляет его в историю транзакций.
   *
   * Если amount больше чем текущий баланс, выводи сообщение
   * о том, что снятие такой суммы не возможно, недостаточно средств.
   */
  withdraw(amount) {
    // робимо перевірку якщо амаунт більше ніж баланс виводимо повідомлення через return
    // іфднімаємо від баланса суму
    //створюємо змінну транзакції і викликаємо його
    //додаємо в історію транзакцій
  },

  /*
   * Метод возвращает текущий баланс
   */
  getBalance() {
    //просто повертаємо баланс
    // return this.balance;
  },

  /*
   * Метод ищет и возвращает объект транзации по id
   */
  getTransactionDetails(id) {
    //дає можливість знайти обєкт однієї операції
    // створюємо цикл for...of перебираємо транзакції із нашого акаунту
    for (let transaction of account.transactions) {
      // якщо айді транзакції = айді - повертаємо транзакцію
      if (transaction.id === id) {
        return transaction;
      }
    }
    //якщо операції немає повертаємо рядок
    return 'Операції не знайдено';
  },

  /*
   * Метод возвращает количество средств
   * определенного типа транзакции из всей истории транзакций
   */
  getTransactionTotal(type) {
    //створюємо проміжну тотал змінну для сумування

    //перебираємо масив транзакцій акаунту

    //якщо тип транзакції спвпадає з типом , сумуємо до тоталу суму транзакції

    //повертаємо тотал
    return total;
  },
};
// ```

console.log(account.getBalance());
account.deposit(150);
account.deposit(250);
account.deposit(350);
account.deposit(150);
account.withdraw(50);
account.withdraw(150);
account.withdraw(250);
console.log(account.getBalance());
console.log(account.transactions);
console.log(account.getTransactionDetails(20));
console.log(account.getTransactionTotal(Transaction.WITHDRAW));
console.log(account.getTransactionTotal(Transaction.DEPOSIT));
