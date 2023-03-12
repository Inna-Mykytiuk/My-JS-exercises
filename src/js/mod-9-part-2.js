//Promises

// const isSuccess = true;
const isSuccess = false;

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (isSuccess) {
      resolve('Success');
    } else {
      reject('Error');
    }
  }, 2000);
});
// console.log('promise', promise);

console.log('before promise .then');

promise.then(
  value => {
    console.log('On resolve inside promise');
    console.log('value', value);
  },
  error => {
    console.log('On reject inside promise');
    console.log('error', error);
  }
);

// [1, 2, 3, 4, 5].map((element, index, arr) => {});

// const promise = new Promise((resolve, reject) => {
//   resolve(10);
// });

// const promise = new Promise((resolve, reject) => {
//   reject(10);
// });

// const promise = new Promise((ok, error) => {});

// console.log("a");
// console.log("b");

// const result = new Promise((resolve, reject) => {
//   let total = 0;

//   for (let i = 0; i < 1000000000; i++) {
//     total += i;
//   }

//   if (total % 2 === 0) {
//     resolve(total);
//   } else {
//     reject(8);
//   }
// });

// const result = new Promise((ok, failed) => {
//   let total = 0;

//   for (let i = 0; i < 1000000000; i++) {
//     total += i;
//   }

//   if (total % 2 === 0) {
//     ok(total);
//   } else {
//     failed(8);
//   }
// });

// result
//   .then((data) => console.log(data))
//   .then((data) => console.log(data))
//   .then((data) => console.log(data))
//   .catch((error) => console.log(error))
//   .finally(() => console.log("finally"));

// let isLoading = true;

// result
//   .then(
//     (data) => console.log(data),
//     (error) => console.log(error)
//   )
//   .then(
//     (data) => console.log(data),
//     (error) => console.log(error)
//   )
//   .then(
//     (data) => console.log(data),
//     (error) => console.log(error)
//   )
//   .finally(() => (isLoading = false));

// Promise.resolve();

// class vs екземпляр класу

//   .then((data) => console.log(data))
//   .then((data) => console.log(data))
//   .finally(() => console.log("finally"));

// addEventListener("click", registerClick);

// console.log(result);

// setTimeout(() => {
//   console.log("a");
// }, 1000);

// Promise.resolve(10);

// function promiseCreator(counter) {
//   return new Promise((ok, failed) => {
//     let total = 0;

//     for (let i = 0; i < counter; i++) {
//       total += i;
//     }

//     // console.log(total);

//     if (total % 2 === 0) {
//       ok(total);
//     } else {
//       failed('Error');
//     }
//   });
// }

// promiseCreator(10)
//   .then((data) => console.log(data))
//   .catch((error) => console.log(error));

// promiseCreator(1001)
//   .then((data) => console.log(data))
//   .catch((error) => console.log(error));

// Promise.all([promiseCreator(8), promiseCreator(1001)])
//   .then((data) => {
//     console.log("data", data);
//   })
//   .catch((error) => {
//     console.log("error", error);
//   });

// Promise.race([promiseCreator(10), promiseCreator(1001)])
//   .then((data) => {
//     console.log("data", data);
//   })
//   .catch((error) => {
//     console.log("error", error);
//   });

// Promise.allSettled([promiseCreator(10), promiseCreator(1001)])
//   .then(data => {
//     console.log('data', data);
//   })
//   .catch(error => {
//     console.log('error', error);
//   });
