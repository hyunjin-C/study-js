"use strict";

// Javascript is synchronous. (동기적)
// Execute the code block in order after hoisting.
// hoisting: var, function declaration
console.log("1");
setTimeout(() => console.log("2"), 1000);
console.log("3");

// Synchronous callback: 동기 callback
function printImmediately(print) {
  print();
}
// 실행될 때는 함수 선언이 hoisting되어 맨 위로 올라간다.

printImmediately(() => console.log("hello"));

// Asynchornous callback
function printWithDelay(print, timeout) {
  setTimeout(print, timeout);
}

printWithDelay(() => console.log("async callback"), 2000);

// Callback Hell example
class UserStorage {
  loginUser(id, password, onSuccess, onError) {
    setTimeout(() => {
      if (
        (id === "ellie" && password === "dream") ||
        (id === "coder" && password === "academy")
      ) {
        onSuccess(id);
      } else {
        onError(new Error("not Found"));
      }
    }, 2000);
  }

  getRoles(user, onSuccess, onError) {
    setTimeout(() => {
      if (user === "ellie") {
        onSuccess({ name: "ellie", role: "admin" });
      } else {
        onError(new Error("no access"));
      }
    });
  }
}

// 1. 사용자에게 id와 password를 입력받음
// 2. 서버에게 로그인을 함
// 3. 받아온 id를 이용해서 역할을 요청
// 4. 이름과 역할이 들어있는 object 출력

const userStorage = new UserStorage();
const id = prompt("enter your id");
const password = prompt("enter your password");
userStorage.loginUser(
  id,
  password,
  (user) => {
    userStorage.getRoles(
      user,
      (userWithRole) => {
        alert(
          `Hello ${userWithRole.name}, you have a ${userWithRole.role}! role`
        );
      },
      (error) => {
        console.log(error);
      }
    );
  },
  (error) => {
    console.log(error);
  }
);

// <callback chain의 문제점>
// 1. 가독성이 너무 떨어짐.
// 2. 에러, 디버깅을 해야할 때 알기가 어려우므로 문제를 분석하기가 힘듦.
// 3. 유지 보수가 어려움.
// -> 콜백 지옥....
