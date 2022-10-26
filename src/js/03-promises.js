import { Notify } from 'notiflix/build/notiflix-notify-aio';
import 'notiflix/dist/notiflix-3.2.5.min.css';

// const refs = {
//   firstDelayInput: document.querySelector('[name="delay"]'),
//   stepDelayInput: document.querySelector('[name="step"]'),
//   amountPromises: document.querySelector('[name="amount"]'),
//   form: document.querySelector('.form'),
// };

// refs.form.addEventListener('submit', OnSubmitForm);

// function OnSubmitForm(event) {
//   event.preventDefault();
//   const firstDelay = parseInt(event.srcElement[0].value);
//   const stepDelay = parseInt(event.srcElement[1].value);
//   const amountPromises = parseInt(event.srcElement[2].value);
//   renderPromisesOnSubmitForm(firstDelay, stepDelay, amountPromises);
// }

// function renderPromisesOnSubmitForm(delay, stepDelay, amountPromises) {
//   let position = 0;
//   for (let i = 0; i < amountPromises; i++) {
//     delay += stepDelay;
//     position += 1;
//     createPromise(position, delay)
//       .then(({ position, delay }) => {
//         Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
//       })
//       .catch(({ position, delay }) => {
//         Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
//       });
//   }
// }

// function createPromise(position, delay) {
//   const shouldResolve = Math.random() > 0.3;
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (shouldResolve) {
//         resolve({ position, delay });
//       }
//       reject({ position, delay });
//     }, delay);
//   });
// }

//  Задачи со старой программы ---------------------
//  задача 1

// const delay = ms => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(ms);
//     }, ms);
//   });
// };

// const logger = time => Notify.success(`Resolved after ${time}ms`);

// delay(2000).then(logger);
// delay(1000).then(logger);
// delay(1500).then(logger);

//  Задача 2 -----------------
// const users = [
//   { name: 'Mango', active: true },
//   { name: 'Poly', active: false },
//   { name: 'Ajax', active: true },
//   { name: 'Lux', active: false },
// ];

// const toggleUserState = (allUsers, userName) => {
//   const updatedUsers = allUsers.map(user =>
//     user.name === userName ? { ...user, active: !user.active } : user
//   );
//   return new Promise((resolve, reject) => {
//     resolve(updatedUsers);
//     reject(updatedUsers);
//   });
// };
// const logger = updatedUsers => console.table(updatedUsers);

// toggleUserState(users, 'Mango').then(logger);
// toggleUserState(users, 'Lux').then(logger);

// Задача 3

// const randomIntegerFromInterval = (min, max) => {
//   return Math.floor(Math.random() * (max - min + 1) + min);
// };

// const makeTransaction = ({ id }) => {
//   const delay = randomIntegerFromInterval(200, 500);
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const canProcess = Math.random() > 0.3;

//       if (canProcess) {
//         resolve({ id, delay });
//       } else {
//         reject(id);
//       }
//     }, delay);
//   });
// };

// const logSuccess = ({ id, delay }) => {
//   console.log(`Transaction ${id} processed in ${delay}ms`);
// };

// const logError = id => {
//   console.warn(`Error processing transaction ${id}. Please try again later.`);
// };

// makeTransaction({ id: 70, amount: 150 }).then(logSuccess).catch(logError);

// makeTransaction({ id: 71, amount: 230 }).then(logSuccess).catch(logError);

// makeTransaction({ id: 72, amount: 75 }).then(logSuccess).catch(logError);

// makeTransaction({ id: 73, amount: 100 }).then(logSuccess).catch(logError);
