// 1. String concatenation
console.log("my" + "cat");
console.log("1" + 2); // string + number -> string
console.log(`string literals: 
    ''''
    1 + 2 = ${1 + 2}`); // string literals의 장점: 줄바꿈이나 특수기호를 적어도 인식한다.
console.log("hj's\tbooks\n");
// 따옴표''로 문자열을 만들면 줄바꿈이나 특수기호를 인식되지 않는다
// -> \, \n, \t와 같은 특수 문자열을 통해 나타낼 수 있다.

// 2. Numeric operators
console.log(1 + 1); // add
console.log(1 - 1); // subtract
console.log(1 * 1); // multiply
console.log(1 / 1); // divide
console.log(1 % 1); // remainder
console.log(1 ** 1); // exponentiation

// 3. Increment and decrement operators
let counter = 2;
const preIncrement = ++counter;
// counter = counter + 1;
// preIncrement = counter;
console.log(`preIncrement: ${preIncrement}, counter: ${counter}`);
const postIncrement = counter++;
// preIncrement = counter;
// counter = counter + 1;
console.log(`preIncrement: ${preIncrement}, counter: ${counter}`);
const preDecrement = --counter;
// counter = counter - 1;
// preDecrement = counter;
console.log(`preDecrement: ${preDecrement}, counter: ${counter}`);
const postDecrement = counter--;
// preDecrement = counter;
// counter = counter - 1;
console.log(`preDecrement: ${preDecrement}, counter: ${counter}`);

// 4. Assignment operators
let a = 3;
let b = 6;
a += b; // a = a + b;
a -= b;
a *= b;
a /= b;

// 5. Comparison operators
console.log(10 < 6); // less than
console.log(10 <= 6); // less than or equal
console.log(10 > 6); // greater than
console.log(10 >= 6); // greater than or equal

// 6. Logical operators: ||(or), &&(and), !(not)
const value1 = true;
const value2 = 4 < 2;

// ||(or), finds the first truthy value
console.log(`or: ${value1 || value2 || check()}`);

// &&(and), finds the first falsy value
console.log(`and: ${value1 && value2 && check()}`);

// often used to compress long if-statement
// nullableObject && nullableObject.something
// if (nullableObject != null) {
//   nullableObject.something;
// }

function check() {
  for (let i = 0; i < 10; i++) {
    // wasting time
    console.log("😃");
  }
  return true;
}

// 주의해야할 것: heavy operation일수록 제일 뒤쪽에서 체크하는 것이 좋음

// !(not)
const value = true;
console.log(!value);

// 7. Equality
const stringFive = "5";
const numberFive = 5;

// == loose equality, with type conversion
console.log(stringFive == numberFive);
console.log(stringFive != numberFive);

// === strict equality, no type conversion
console.log(stringFive === numberFive);
console.log(stringFive !== numberFive);

// object equality by reference
const ellie1 = { name: "ellie" };
const ellie2 = { name: "ellie" };
const ellie3 = ellie1;
console.log(ellie1 == ellie2); // false
console.log(ellie1 === ellie2); // false
console.log(ellie1 === ellie3); // true

// equality - puzzler
console.log(0 == false); // true
console.log(0 === false); // false
console.log("" == false); // true
console.log("" === false); // false
console.log(null == undefined); // true
console.log(null === undefined); // false

// 8. Conditional opertors: if
// if, else if, else
const your_name = "df";
if (your_name === "ellie") {
  console.log("Welcome, Ellie!");
} else if (your_name === "coder") {
  console.log("You are amazing coder!");
} else {
  console.log("unknown");
}
// 9. Ternary operator: ?
// condition ? value1 : value2
console.log(name === "ellie" ? "yes" : "no");

// 10. Switch statement
// use for multiple if checks
// use for enum-like value check
// use for multiple type checks in TS
const browser = "IE";
switch (browser) {
  case "IE":
    console.log("go away!");
    break;
  case "Chrome":
  case "FireFox":
    console.log("love you!");
    break;
  default:
    console.log("same all!");
    break;
}

// 11. Loops
// while loop, while the condition is truethy,
// body code is executed.
let i = 3;
while (i > 0) {
  console.log(`while: ${i}`);
  i--;
}

// do while loop, body code is executed first,
// then check the condition.
do {
  console.log(`do while: ${i}`);
  i--;
} while (i > 0);

// for loop, for(befin; condition; step)
for (i = 3; i > 0; i--) {
  console.log(`for: ${i}`);
}

for (let i = 3; i > 0; i = i - 2) {
  // inline variable declaration
  console.log(`inline variable for: ${i}`);
}

// nested loop
// 시간복잡도가 O(n^2)이 되기 때문에 되도록 쓰지 않는 것이 좋음
for (let i = 0; i < 10; i++) {
  for (let j = 0; j < 10; j++) {
    console.log(`i: ${i}, j: ${j}`);
  }
}

// break, continue
// Q1. iterate from 0 to 10 and print only even numbers (use continue)
for (let i = 0; i < 11; i++) {
  if (i % 2 === 1) {
    continue;
  }
  console.log(`q1: ${i}`);
}

// Q2. iterate from 0 to 10 and print numbers until reaching 8 (use break)
for (let i = 0; i < 11; i++) {
  if (i > 8) {
    break;
  }
  console.log(`q2: ${i}`);
}
