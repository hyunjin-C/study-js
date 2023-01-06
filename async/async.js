// async & await
// clear style of using promise :)

// 1. async
async function fetchUser() {
  return "ellie";
}

// async 키워드를 사용하면 Promise로 바로 변환이 됨

const user = fetchUser();
user.then(console.log);
console.log(user);

// 2. await ✨
function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function getApple() {
  await delay(1000);
  // throw "error";
  return "🍎";
}

async function getBanana() {
  await delay(1000);
  return "🍌";
}

// Promise로만 적을시 Callback 지옥이 나타날 수도 있음!!
// function pickFruits() {
//   return getApple().then((apple) => {
//     return getBanana().then((banana) => `${apple} + ${banana}`);
//   });
// }

// await을 이용한 코드
async function pickFruits() {
  const applePromise = getApple();
  const bananaPromise = getBanana();
  const apple = await applePromise;
  const banana = await bananaPromise;
  return `${apple} + ${banana}`;
}
// 사과와 바나나를 동시에 병렬적으로 처리(서로 연결되어있지 않으면)
// 하지만 이렇게 코드를 쓰지않음. Promise API를 이용하면 코드를 깔끔하게 적을 수 있음

pickFruits().then(console.log);

// 3. useful Promise APIs
// Promise.all(): Promise 배열을 전달하게 되면 모든 Promise들이 병렬적으로 다 받을 때까지 모아준다.
function pickAllFruits() {
  return Promise.all([getApple(), getBanana()]).then((fruits) =>
    fruits.join(" + ")
  );
}

pickAllFruits().then(console.log);

// Promise.race(): 배열에 전달된 Promise 중에서 가장 먼저 리턴된 것이 전달된다.
function pickOnlyOne() {
  return Promise.race([getApple(), getBanana()]);
}

pickOnlyOne().then(console.log);
