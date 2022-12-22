// Objects
// one of the JavaScript's data types.
// a collection of related data and/or functionality.
// Nearly all objects in JavaScript are instances of Object.
// object = { key: value }; object는 key와 value의 집합체이다.

// 1. Literals and properties
const obj1 = {}; // 'object literal' syntax
const obj2 = new Object(); // 'object contructor' syntax

function print(person) {
  console.log(person.name);
  console.log(person.age);
}

const ellie = { name: "ellie", age: 4 }; // object
print(ellie);

// with JavaScript magic (dynamically typed language)
// can add properties later
// JavaScript는 동적으로 타입이 Runtime(프로그램이 동작하고 있을 때) 결정되기 때문에
// 뒤늦게 object를 정의했음에도 불구하고 properties를 더 추가할 수 있음.
// -> 하지만 유지보수가 힘들고 예상치 못한 에러가 발생할 수 있기 때문에 안하는 것이 좋음.
ellie.hasJob = true;
console.log(ellie.hasJob);

// can delete properties later
delete ellie.hasJob;
console.log(ellie.hasJob);

// 2. Computed properties: 계산된 properties
// 접근 방식 2가지
console.log(ellie.name); // 코딩하는 그 순간 key에 대한 value를 가져오고 싶을 때 사용
console.log(ellie["name"]); // key should be always string
// 정확하게 어떤 key가 필요한지 모를 때 runtime에서 결정될 때 사용
ellie["hasJob"] = true;
console.log(ellie.hasJob);

// 동적으로 key에 대한 value를 받아와야할 때 유용하게 쓸 수 있음
function printValue(obj, key) {
  console.log(obj[key]); // conputed property
  // console.log(obj.key); // undefined -> object에 key라는 property가 들어있지 않기 때문
}
printValue(ellie, "name");
printValue(ellie, "age");

// 3. Property value shorthand
const person1 = { name: "bob", age: 2 };
const person2 = { name: "steve", age: 3 };
const person3 = { name: "dave", age: 4 };
const person4 = new Person("ellie", 30); // 객체를 생성할 때도 Class에서 object를 만드는 것처럼
console.log(person4);

// 4. Constructor Function
// Class Constructor 작성한 것처럼 쓰면 된다.
function Person(name, age) {
  // this = {};
  this.name = name;
  this.age = age;
  // return this;
}

// 5. in operator: property existence check (key in obj)
// in이라는 키워드를 통해 해당하는 key가 object에 있는지 없는지 확인할 수 있다.
console.log("name" in ellie);
console.log("age" in ellie);
console.log("random" in ellie);
console.log(ellie.random); // undefined

// 6. for..in vs for..of
// for (key in obj)
for (key in ellie) {
  console.log(key);
}

// for (value of iterable)
const array = [1, 2, 4, 5];
for (value of array) {
  console.log(value);
}

// 7. Fun Cloning
// Object.assign(dest, [obj1, obj2, obj3,...])
const user = { name: "ellie", age: 20 };
const user2 = user;
console.log(user);

// <object를 복제하는 방법>
// old way
const user3 = {};
for (key in user) {
  user3[key] = user[key];
}
console.log(user3);

// now
const user4 = Object.assign({}, user);
console.log(user4);

// 여러 개의 source 전달
const fruit1 = { color: "red" };
const fruit2 = { color: "blue", size: "big" };
const mixed = Object.assign({}, fruit1, fruit2); // 여러 개일 때는 마지막에 있는 것으로 덮어씌워지게 됨
console.log(mixed.color);
console.log(mixed.size);
