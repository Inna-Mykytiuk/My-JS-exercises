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
    return {
      amount,
      type,
      id: account.transactions.length,
    };
  },

  /*
   * Метод отвечающий за добавление суммы к балансу.
   * Принимает сумму танзакции.
   * Вызывает createTransaction для создания объекта транзакции
   * после чего добавляет его в историю транзакций
   */
  deposit(amount) {
    //додаємо до балансу амаунт
    account.balance += amount;
    //створюємо змінну транзакції і викликаємо його
    const transaction = account.createTransaction(amount, Transaction.DEPOSIT);
    //додаємо в історію транзакцій
    account.transactions.push(transaction);
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
    // робимо перевірку якщо амаунт більше ніж баланс виводимо повідомлення
    if (amount > account.balance) {
      return 'Недостатньо коштів на рахунку';
    }
    account.balance -= amount;
    //створюємо змінну транзакції і викликаємо його
    const transaction = account.createTransaction(amount, Transaction.WITHDRAW);
    //додаємо в історію транзакцій
    account.transactions.push(transaction);
  },

  /*
   * Метод возвращает текущий баланс
   */
  getBalance() {
    //просто повертаємо баланс
    // return this.balance;
    return account.balance;
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
    let total = 0;
    //перебираємо масив транзакцій акаунту
    for (let transaction of account.transactions) {
      //якщо тип транзакції спвпадає з типом , сумуємо до тоталу суму транзакції
      if (transaction.type === type) {
        total += transaction.amount;
      }
    }
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
