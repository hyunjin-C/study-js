"use strict";

// Promise is JavaScript object for asynchronous
// 비동기적인 것을 수행할 때 callback 함수 대신해 사용할 수 있는 유용한 오브젝트

// State: pending -> fulfilled or rejected
// Producer vs Consumer

// 1. Producer
// when new Promise is created, the executor runs automatically.
const promise = new Promise((resolve, reject) => {
  // doing some heavy work (network, read files)
  console.log("doing something...");
  setTimeout(() => {
    // resolve("ellie");
    reject(new Error("no network"));
  }, 2000);
});

// 2. Consumers: then, catch, finally
promise
  .then((value) => {
    console.log(value);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log("finally");
  });

// 3. Promise chaining
const fetchNumber = new Promise((resolve, reject) => {
  setTimeout(() => resolve(1), 1000);
});

fetchNumber
  .then((num) => num * 2)
  .then((num) => num * 3)
  .then((num) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(num - 1), 1000);
    });
  })
  .then((num) => console.log(num));

// 4. Error Handling
const getHen = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve("🐔"), 1000);
  });
const getEgg = (hen) =>
  new Promise((resolve, reject) => {
    setTimeout(() => reject(new Error(`${hen} => 🥚`)), 1000);
  });
const cook = (egg) =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve(`${egg} => 🍳`), 1000);
  });

getHen()
  //   .then((hen) => getEgg(hen))
  //   .then((egg) => cook(egg))
  //   .then((meal) => console.log(meal));

  // callback 함수를 전달할 때 한 가지 값만 받아서 바로 다른
  // 함수에 전달하는 경우에는 생략 가능
  .then(getEgg)
  //   .catch((error) => {
  //     return "🥖";
  //   })
  .then(cook)
  .then(console.log)
  .catch(console.log);
