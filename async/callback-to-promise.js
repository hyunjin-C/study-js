// Callback Hell example -> Promise Good Example

class UserStorage {
  loginUser(id, password) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (
          (id === "ellie" && password === "dream") ||
          (id === "coder" && password === "academy")
        ) {
          resolve(id);
        }
        reject(new Error("not Found"));
      });
    }, 2000);
  }
  getRoles(user) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (user === "ellie") {
          resolve({ name: "ellie", role: "admin" });
        } else {
          reject(new Error("no access"));
        }
      });
    }, 1000);
  }
}

// 1. 사용자에게 id와 password를 입력받음
// 2. 서버에게 로그인을 함
// 3. 받아온 id를 이용해서 역할을 요청
// 4. 이름과 역할이 들어있는 object 출력

const userStorage = new UserStorage();
const id = prompt("enter your id");
const password = prompt("enter your password");
userStorage
  .loginUser(id, password)
  .then(userStorage.getRoles)
  .then((user) => alert(`Hello ${user.name}, you have a ${user.role}! role`))
  .catch((error) => {
    console.log(error);
  });
