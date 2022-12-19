// Function
// - fundamental building block in the program
// - subprogram can be used multiple times
// - performs a task or calculates a value

// 1. Function declaration
// function name(param1, param2) { body... return; }
// one function === one thing
// naming: doSomething, command, verb
// e.g. createCardAndPoint -> createCard, createPoint
// function is object in JS

function printHello() {
  console.log("Hello");
}

printHello();

// function with parameters

function log(message) {
  console.log(message);
}

log("Hello!");

// 하지만 자바스크립트에는 타입이 없어서 함수 자체의 인터페이스만 보았을 때 메세지를
// 전달할 때 어떤 타입으로 전달해야할지 명확하지 않기 때문에 타입이 중요한 함수에서
// 조금 난해할 수 있다. -> TypeScript로 작성하면 타입을 이용하여 명확하게 나타낼 수 있다.

// 2. Parameters
// premitive parameters: passed by value
// object parameters: passed by reference

function changeName(obj) {
  obj.name = "coder";
}

const ellie = { name: "ellie" };
changeName(ellie);
console.log(ellie);

// 3. Default parameters (added in ES6)
function showMessage(message, from = "unknown") {
  console.log(`${message} by ${from}`);
}

showMessage("Hi!");

// 4. Rest parameters (added in ES6)
function printAll(...args) {
  for (let i = 0; i < args.length; i++) {
    console.log(args[i]);
  }

  for (const arg of args) {
    console.log(arg);
  }

  args.forEach((arg) => console.log(arg));
}

printAll("dream", "coding", "ellie");

// 5. Local scope
let globalMessage = "global"; // global variable
function printMessage() {
  let message = "hello"; // local variable
  console.log(message);
  console.log(globalMessage);

  function printAnother() {
    console.log(message);
    let childMessage = "hello";
  }
  // console.log(childMessage); // error
  // 안에서는 밖을 볼 수 있지만 밖에서는 안을 볼 수 없다.
}

printMessage();

//6. Return a value
function sum(a, b) {
  return a + b;
}

const result = sum(1, 2); // 3
console.log(`sum: ${sum(1, 2)}`);

// return type이 없는 함수들은 기본적으로 return undefined 들어가있는 것과 똑같다.(생략 가능)

// 7. Early return, early exit (현업에서 코드 리뷰 시 많이 쓰임)
// bad
function upgradeUser(user) {
  if (user.point > 10) {
    // long upgrade logic...
  }
}

// good
function upgradeUser(user) {
  if (user.point <= 10) {
    return;
  }
  // long upgrade logic...
}

// First-class function
// functions are treated like any other variable
// can be assigned as a value to varaiabe
// can be passed as an argument to other functions
// can be returned by another function

// 1. Function expression
// a function declaration can be called earlier than it is defined.(hoisted)
// a function expression is created when the execution reaches it.

const print = function () {
  // anonymous function
  console.log("print");
};

print();
const printAgain = print;
printAgain();
const sumAgain = sum;
console.log(sumAgain(1, 3));

// 2. Callback function using function expression
function randomQuiz(answer, printYes, printNo) {
  if (answer === "love you") {
    printYes();
  } else {
    printNo();
  }
}

// anoymous function
const printYes = function () {
  console.log("yes!");
};

// named function
// - better debugging in debugger's stack traces
// - recursions

const printNo = function print() {
  console.log("no!");
  //print();
};

randomQuiz("wrong", printYes, printNo);
randomQuiz("love you", printYes, printNo);

// Arrow function
// - very concise
// - always anoymous

const simplePrint = () => console.log("simplePrint!");
const add = (a, b) => a + b;
const simpleMultiply = (a, b) => {
  // do something more
  return a * b;
};

// IIFE: Immediately Invoked Function Expression
(function hello() {
  console.log("IIFE");
})();

// Fun quiz time
// function calculate(command, a, b)
// command: add, substract, divide, multiply, reminder

function calculate(command, a, b) {
  if (command === "add") {
    console.log(a + b);
  } else if (command === "substract") {
    console.log(a - b);
  } else if (command === "divide") {
    console.log(a / b);
  } else if (command === "multiply") {
    console.log(a * b);
  } else if (command === "reminder") {
    console.log(a % b);
  }
}

calculate("substract", 8, 4);

(function calculate(command, a, b) {
  switch (command) {
    case "add":
      console.log(a + b);
      break;
    case "substract":
      console.log(a - b);
      break;
    case "divide":
      console.log(a / b);
      break;
    case "multiply":
      console.log(a * b);
      break;
    case "reminder":
      console.log(a % b);
      break;
  }
})("multiply", 3, 8);

// First-class Function
const calculation = (command, a, b) => {
  switch (command) {
    case "add":
      console.log(a + b);
      break;
    case "substract":
      console.log(a - b);
      break;
    case "divide":
      console.log(a / b);
      break;
    case "multiply":
      console.log(a * b);
      break;
    case "reminder":
      console.log(a % b);
      break;
  }
};

calculation("add", 4, 7);
