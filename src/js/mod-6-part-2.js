// const form = document.querySelector(".form");

// form.addEventListener("submit", handleSubmit);

// // [12, 3, 4].map((el, idex, arr) => {});

// function handleSubmit(event) {
//   event.preventDefault();
//   // console.log("current", event.currentTarget.elements);
//   // console.log("target", event.target);
//   const {
//     elements: { login, password },
//   } = event.currentTarget;

//   console.log(login);
//   console.log(password);

//   if (login.value === "" || password.value === "") {
//     return console.log("Please fill in all the fields!");
//   }

//   console.log(`Login: ${login.value}, Password: ${password.value}`);
//   event.currentTarget.reset();
// }

//Клонування елементів
// const container = document.querySelector(".container");
// const footer = document.querySelector("footer");

// const h1 = document.createElement("h1");
// h1.textContent = "Hello World!!!!!!!!";
// container.append(h1);
// const cloneTitle = h1.cloneNode(true);
// cloneTitle.textContent = "Hello";
// footer.append(cloneTitle);
// footer.append(h1);

// const user = {
//   name: "John",
//   age: 30,
// };

// const user2 = { ...user };

// const user3 = user;

// const h1 = document.querySelector(".container"); // створили обєкт
// const copy = h1
// const cloneTitle = h1.cloneNode(true); // скопіювали обєкт h1

// const select = document.querySelector(".pizza-select");
// const textOutput = document.querySelector(".text-output");
// const valueOutput = document.querySelector(".value-output");

// // setOutput();

// select.addEventListener("change", setOutput);

// function setOutput() {
//   console.log(select);
//   // const selectedOptionValue = select.value;
//   const selectedOptionIndex = select.selectedIndex;
//   // const selectedOptionText = select.options[selectedOptionIndex].text;
//   console.log(select.options[selectedOptionIndex].textContent);
//   textOutput.textContent = selectedOptionText;
//   valueOutput.textContent = selectedOptionValue;
// }

// const showModal = () => {
//   console.log("show modal");
// };

// addEventListener("DOMContentLoaded", showModal);

// const overlay = document.querySelector('.overlay');
// const closeBtn = document.querySelector('.close');
// const openBtn = document.querySelector('.open');

// // const showModal = () => {
// //   overlay.classList.remove('hide');
// // };

// // const hideModal = () => {
// //   overlay.classList.add('hide');
// // };

// const toggleModal = () => {
//   overlay.classList.toggle('hide');
// };

// addEventListener('DOMContentLoaded', toggleModal);
// window.addEventListener('DOMContentLoaded', toggleModal);

// closeBtn.addEventListener('click', toggleModal);
// openBtn.addEventListener('click', toggleModal);

// const refs = {
//   recepiesList: document.querySelector('.recepies-list'),
//   openModalButton: document.querySelector('.modal__btn-open'),
//   closeModalButton: document.querySelector('.modal__btn-close'),
//   backdrop: document.querySelector('.backdrop'),
// };

// function openModal() {
//   refs.backdrop.classList.remove('is-hidden');
// }
// function closeModal() {
//   refs.backdrop.classList.add('is-hidden');
// }

// function onOpenButtonClick(event) {
//   openModal();
// }
// function onCloseButtonClick(event) {
//   closeModal();
// }

// refs.openModalButton.addEventListener('click', onOpenButtonClick);
// refs.closeModalButton.addEventListener('click', onCloseButtonClick);
