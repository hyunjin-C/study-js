# JavaScript 정리

## 목차
[1. 콘솔에 출력하기](#콘솔에-출력하기)   
[2. script async와 defer의 차이점](#script-async와-defer의-차이점)   
[3. Data types](#data-types)    
[4. Operators](#operators)    
[5. Function](#function)   
[6. Class](#class-introduced-in-es6)   
[7. Objects](#objects)   
[8. Array](#array)

## 콘솔에 출력하기
ex) Hello world! 출력    
```javascript
// main.js
console.log("Hello World!);
```

## script async와 defer의 차이점
HTML에서 JavaScript를 포함시키는 방법은 여러가지가 있다.   

### 1. head 안에 스크립트를 포함시켰을 경우
```html
<head>
...
<script src="main.js"></script>
</head>
```
![script_head](https://user-images.githubusercontent.com/89180168/207649332-1fbf264a-a47f-4622-96e1-a7407d79d283.JPG)   
브라우저가 HTML을 한 줄씩 parsing하다가 script 태그가 있으면 HTML을 parsing하는 것을 잠시 멈추고 필요한 JavaScript 파일을 서버에서 받아오고 실행을 한 후에 실행이 끝나면 다시 이어서 HTML을 parsing한다.   
   
- 단점: 다운 받으려고하는 JavaScript 파일이 매우 크면 사용자가 웹사이트를 보는 데까지 많은 시간이 소요된다.
   
### 2. body 안에 스크립트를 포함시켰을 경우
```html
<body>
...
<script src="main.js"></script>
</body>
```
![script_body](https://user-images.githubusercontent.com/89180168/207657730-65060fc5-ddee-49c1-9b9a-f9af87207029.JPG)   
브라우저가 HTML을 parsing해서 페이지가 준비된 다음 스크립트를 서버에서 받아오고 실행하게 된다.   
- 장점: 페이지가 자바스크립트 파일을 받기 전에도 이미 준비가 되어 사용자가 HTML 콘텐츠를 빨리 볼 수 있다.   
- 단점: 만약 웹사이트가 자바스크립트에 의존적이라면, 즉 사용자가 의미있는 콘텐츠를 보기 위해서 자바스크립트를 이용하여 서버에서 데이터를 받아와야하는 웹사이트는 자바스크립트 파일을 fetching하고 executing하는 시간을 기다려야 정상적인 페이지를 볼 수 있다.   

### 3. head 안에 async 속성을 추가하여 스크립트를 포함시켰을 경우
```html
<head>
...
<script async src="main.js"></script>
</head>
```
![script_body](https://user-images.githubusercontent.com/89180168/207657800-79c10532-7cde-4c44-b3c5-dbcedd2b625c.JPG)   
브라우저가 HTML을 parsing하다가 async 속성이 있는 스크립트 파일을 만나면 이 파일을 다운로드 받자고 명령만 하고 계속 parsing하다가 파일 다운이 완료되면 그때 parsing하는 것을 멈추고 자바스크립트가 실행이 되며 실행을 하면 다시 나머지 HTML을 parsing한다.   
- 장점: fetching하는 것이 병렬적으로 일어나기 때문에 자바스크립트 파일을 서버에서 불러오는 시간을 절약할 수 있다.
- 단점: 자바스크립트 파일이 HTML이 parsing되기도 전에 실행이 되기 때문에 만약 Queryselector를 이용하여 DOM요소를 조작한다고 하면 조작하려고하는 시점에 HTML에서 우리가 원하는 요소가 아직 정의되지 않았을 수도 있다. 또한 HTML을 parsing하는 동안 언제든지 자바스크립트를 실행하기 위해 멈출 수 있기 때문에 사용자가 페이지를 보는 데 여전히 시간이 걸릴 수 있다.   

### 4. head 안에 defer 속성을 추가하여 스크립트를 포함시켰을 경우
```html
<head>
...
<script defer src="main.js"></script>
</head>
```
![script_body](https://user-images.githubusercontent.com/89180168/207657838-7a05c427-e520-48b7-894e-b370969cf904.JPG)   
브라우저가 HTML을 parsing하다가 defer 속성이 있는 스크립트 파일을 만나면 이 파일을 다운로드 받자고 명령만 하고 나머지 HTML을 끝까지 parsing한 후에 자바스크립트가 실행된다.   
- 장점: HTML parsing을 먼저 해서 사용자에게 페이지를 보여준 다음 다운로드된 자바스크립트 파일을 바로 이어서 실행할 수 있다.   

> #### async와 defer의 차이점 
> async 속성을 사용하면, 정의된 스크립트 순서에는 상관없이 자바스크립트가 실행되어 만약 순서에 의존적이라면 문제가 생길 수 있지만,   
> defer 속성을 사용하면, 정의된 스크립트 순서에 따라 자바스크립트가 실행되어 문제가 발생하지 않는다.   

-> defer 속성이 가장 효율적이고 안전하다.   

## Data types
### 1. let (added in ES6)
: mutable datatype - 메모리에 값을 할당하고 그 값을 변경할 수 있는 데이터타입
```javascript
let name = "hj";
console.log(name);
name = "hello";
console.log(name);
```
- **Block scope**   
: block 안에 쓰는 변수로, block 밖에서는 block 안에 있는 값에 접근할 수 없음   
- **Global scope**   
: block을 쓰지 않고 바로 정의해서 쓰는 변수로, 어느 곳에서나 접근 가능   
-> 어플리케이션이 실행되는 순간부터 끝날 때까지 항상 메모리에 탑재되어있기 때문에 최소한으로 쓰는 것이 좋다. 클래스나 함수, if, loop 등 필요할 때만 정의해서 쓰는 것이 좋다.   
```javascript
let globalName = "global name";
{
  let name = "hj";
  console.log(name);
  name = "hello";
  console.log(name);
}
console.log(name);
console.log(globalName);
```

> #### var vs let   
> - **var hoistng**: move declaration from bottom to top (어디에 선언했는지와 상관 없이 항상 제일 위로 선언을 끌어올려주는 것   
> - **has no block scope** (블록을 이용해서 선언해도 무시학 밖에서도 정상적으로 출력됨)   
> -> var은 이제 절대 쓰면 안된다!! let으로 변수 선언!!

### 2. constants
: favor immutable datatype always for a few reasons - 메모리에 값을 할당하고 그 값을 절대 변경할 수 없는 데이터타입   
#### <constants의 특징>
- **security**   
: 보안 - 해커들이 값을 변경하는 것 방지)
- **thread safety**   
: 어플리케이션이 실행되면 한 가지의 프로세스가 할당이 되고 그 프로세스 안에서는 여러 스레드가 동시에 돌아가면서 어플리케이션이 조금 더 효율적으로 빠르게 동작할 수 있도록 도와주는데, 이 다양한 스레드들이 동시에 변수에 접근해서 값을 변경하는 것 방지   
- **reduce human mistakes**   
: 자신 또는 다른 개발자가 실수로 값을 변경하는 것 방지   
```javascript
const daysInweek = 7;
const maxNumber = 5;
console.log(daysInweek);
console.log(maxNumber);
```   

### 3. Variable types
- **primitive - single item**
: number, string, boolean, null, undefined, symbol   
- **object - function, first-class function** 
> **first-class function**   
> : function도 다른 데이터타입처럼 변수에 할당이 가능하고, 함수의 파라미터, 인자로도 전달이 되고 리턴타입으로도 function을 리턴할 수 있는 것   

#### ===primitive===
- #### number
```javascript
const count = 15; // integer (정수)
const size = 12.5; // decimal number (소수)
console.log(`value: ${count}, type: ${typeof count}`); // number
console.log(`value: ${size}, type: ${typeof size}`); // number
```

- #### number - special numberic values: infinity, -infinity, NaN
```javascript
const infinity = 1 / 0; // positive value(양수)를 0으로 나누면 Infinity
const negativeInfinity = -1 / 0; // negative value(음수)를 0으로 나누면 Negative Infinity
const nAn = "not a number" / 2;
console.log(infinity);
console.log(negativeInfinity);
console.log(nAn); // 연산을 할 때 항상 그 값이 valid한지 확인한 후 연산하는 것이 중요
```

- #### bigInt (중요하지 않음!!!)   
: fairly new, don't use it yet: 아직 chrome과 firefox에서만 지원됨   
```javascript
const bigInt = 123456789012345678901234567890n; // over (-2**53 ~ 2**53)
console.log(`value: ${bigInt}, type: ${typeof bigInt}`);
```

- #### string
```javascript
const char = "c";
const brendan = "brendan";
const greeting = "hello " + brendan;
console.log(`value: ${greeting}, type: ${typeof greeting}`);
const helloBob = `hi ${brendan}!`; // template literals(string)
console.log(`value: ${helloBob}, type: ${typeof helloBob}`); // 백틱 사용 O
console.log("value: " + helloBob + "type: " + typeof helloBob); // 백틱 사용 X
```
> **template literals(string)**
> : 백틱(``)기호를 사용해 원하는 문자열을 적고 ${}를 사용하여 변수의 값을 바로 사용할 수 있음   
> -> 간편하게 문자열 만들 수 있음   

- #### boolean
  - false: 0, null, undefined, NaN, ''   
  - true: any other value   
```javascript
const canRead = true;
const test = 3 < 1; // false
console.log(`value: ${canRead}, type: ${typeof canRead}`);
console.log(`value: ${test}, type: ${typeof test}`);
```

- #### null
: 명확하게 empty 값이라고 지정, null이라고 값을 할당해준 상태   
```javascript
let nothing = null;
console.log(`value: ${nothing}, type: ${typeof nothing}`);
```

- #### undefined
```javascript
let x;
console.log(`value: ${x}, type: ${typeof x}`);
```

- #### symbol
: create unique identifiers for objects    
동일한 문자열을 이용해 만들어도 Symbol은 각각 고유한 식별자가 된다.
맵이나 다른 자료구조에서 고유한 식별자가 필요하거나 동시에 다발적으로 일어날 수 있는 코드에서 우선순위를 주고 싶을 때 정말 고유한 식별자가 필요할 때 쓰인다.

만약 문자열이 똑같다면 동일한 Symbol로 되도록 만들고 싶다면 Symbol.for을 쓰면 된다.   

```javascript
const symbol1 = Symbol("id");
const symbol2 = Symbol("id");
console.log(symbol1 === symbol2); // false
const gsymbol1 = Symbol.for("id");
const gsymbol2 = Symbol.for("id");
console.log(gsymbol1 === gsymbol2); // true
console.log(`value: ${symbol1.description}, type: ${typeof symbol1}`); // symbol을 그냥 출력하면 에러가 발생하는데, .description을 통해 string으로 변환해야 에러가 안남
```

### 4. Dynamic typing
: dynamically typed language
- 장점: 좋은 아이디어가 있을 때 빠르게 프로토타입을 하고 싶을 때 유용하게 쓸 수 있다.
- 단점: 어느정도 규모가 있는 프로젝트를 만들 때 아래의 예제와 같은 dynamic typing으로 인한 문제가 생길 수 있음.
```javascript
let text = "hello";
console.log(text.charAt(0)); // h
console.log(`value: ${text}, type: ${typeof text}`); // string
text = 1;
console.log(`value: ${text}, type: ${typeof text}`); // number
text = "7" + 5;
console.log(`value: ${text}, type: ${typeof text}`); // string
text = "8" / "2";
console.log(`value: ${text}, type: ${typeof text}`); // number
console.log(text.charAt(0)); // error : runtime에서 타입이 정해지기 때문에 발생하는 문제
```

## Operators
### 1. String concatenation
+기호를 통해 문자열을 연속해서 나타낼 수 있다.
```javascript
console.log("my" + "cat");
console.log("1" + 2); // string + number -> string
console.log(`string literals: 
    ''''
    1 + 2 = ${1 + 2}`);
console.log("hj's\tbooks\n");
```
string literals의 장점은 줄 바꿈이나 특수 기호를 적어도 인식한다는 것이다.   
하지만 따옴표('')로 문자열을 작성하면 줄 바꿈이나 특수 기호를 인식하지 못하는데, \, \n, \t 등의 특수 문자열을 통해 인식하도록 만들 수 있다.   
### 2. Numeric operators
기본적인 더하기, 빼기, 곱하기, 나누기, 나머지, 제곱 연산자이다.   
```javascript
console.log(1 + 1); // add
console.log(1 - 1); // subtract
console.log(1 * 1); // multiply
console.log(1 / 1); // divide
console.log(1 % 1); // remainder
console.log(1 ** 1); // exponentiation
```

### 3. Increment and decrement operators
증가 연산자 ++와 감소 연산자--를 변수의 앞에 쓰는지 뒤에 쓰는지에 따라 결과가 다르게 나온다.   
- 증감 연산자를 변수 앞에 쓰고 결과를 출력해보면, 증감 연산이 이루어진 후 대입이 되기 때문에 증감 연산이 이루어진 결과가 나오게 된다.
- 증감 연산자를 변수 뒤에 쓰고 결과를 출력해보면, 대입이 먼저 되고 증감 연산이 이루어지기 때문에 증감 연산이 이루어지지 않은 결과가 나오게 된다.   
```javascript
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
```

### 4. Assignment operators
```javascript
let a = 3;
let b = 6;
a += b; // a = a + b;
a -= b;
a *= b;
a /= b;
```

### 5. Comparison operators
```javascript
console.log(10 < 6); // less than
console.log(10 <= 6); // less than or equal
console.log(10 > 6); // greater than
console.log(10 >= 6); // greater than or equal
```

### 6. Logical operators: ||(or), &&(and), !(not)
- #### ||(or)
finds the first truthy value: 하나라도 true이면 결과는 true가 나온다.    
따라서 값이 여러 개일 때 첫 번째부터 true/false를 확인한 뒤 첫 번째 값이 true일 때는 뒤에 있는 값들은 연산을 하지 않고 바로 true가 된다.   
```javascript
const value1 = true;
const value2 = 4 < 2;
function check() {
  for (let i = 0; i < 10; i++) {
    // wasting time
    console.log("😃");
  }
  return true;
}

console.log(`or: ${value1 || value2 || check()}`);
```

- #### &&(and)
finds the first falsy value: 하나라도 false이면 결과는 false가 나온다.   
따라서 값이 여러 개일 때 첫 번째부터 true/false를 확인한 뒤 첫 번째 값이 false일 때는 뒤에 있는 값들은 연산을 하지 않고 바로 false가 된다. 
```javascript
console.log(`and: ${value1 && value2 && check()}`);
```

> ⭐ **효율적인 코드 작성법**   
>  ||(or) 연산이나 &&(and) 연산을 쓸 때 가장 heavy operation 값일수록 제일 뒤쪽으로 보내서 가장 마지막에 체크하도록 하는 것이 좋다.   

- #### !(not)
```javascript
const value = true;
console.log(!value);
```
### 7. Equality
동등하다는 것을 의미하는 연산자는 2가지 종류가 있다.
- ==: 타입이 다르더라도 의미하는 것이나 겉으로 보기에 같으면 true로 리턴한다.
- ===: 타입까지 모든 것이 같을 때 true로 리턴한다.
```javascript
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
```
ellie1과 ellie2는 객체로 같은 값을 넣었기 때문에 겉으로 보기에는 같아보이지만 ellie1과 ellie2가 가리키는 레퍼런스는 다르다. 각각의 레퍼런스에서 name이라는 변수에 ellie 값을 넣은 것이다. ellie3은 ellie1을 대입한 것이기 때문에 ellie1의 레퍼런스를 가리키게 되었으므로 ellie1과 ellie3은 같게 된다.

```javascript
// equality - puzzler
console.log(0 == false); // true
console.log(0 === false); // false
console.log("" == false); // true
console.log("" === false); // false
console.log(null == undefined); // true
console.log(null === undefined); // false
```

### 8. Conditional operator: If
if, else if, else를 이용하여 조건 연산을 수행한다.
```javascipt
const your_name = "df";
if (your_name === "ellie") {
  console.log("Welcome, Ellie!");
} else if (your_name === "coder") {
  console.log("You are amazing coder!");
} else {
  console.log("unknown");
}
```

### 9. Ternary operator: ?
condition ? value1 : value2   
이와 같은 표현식을 사용하여 if문보다 더 간단하게 조건식을 나타낼 수 있다. 하지만 너무 많은 조건이나 변수들이 있어 복잡하다면 가독성을 떨어트리게 되므로 그럴 때는 사용하지 않는 것이 좋다.   
```javascript
console.log(name === "ellie" ? "yes" : "no");
```

### 10. Switch statement
switch문은 다음과 같은 상황일 때 사용하면 좋다.      
- use for multiple if checks: 체크해야하는 것이 여러 개일 경우   
- use for enum-like value check: 체크하는 값이 enum(열거형)같은 값인 경우   
- use for multiple type checks in TS: 타입스크립트에서 여러개의 타입을 체크할 경우   
```javascript
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
```

### 11. loop
반복문의 종류는 3가지가 있다.
- while   
- do while   
- for    
조건이 참이면 그 조건의 블록 안에 있는 코드가 실행되고 그렇지 않다면 빠져나온다.   

- #### while
```javascript
let i = 3;
while (i > 0) {
  console.log(`while: ${i}`);
  i--;
}
```
while문은 조건이 먼저 참인지 확인 후 실행된다.   

- #### do while
```javascript
do {
  console.log(`do while: ${i}`);
  i--;
} while (i > 0);
```
do while문은 먼저 실행 후에 조건이 참인지 확인하기 때문에 조건이 참이 아니더라도 무조건 한 번은 실행되어 while문과는 차이가 있다.   

- #### for
```javascript
for (i = 3; i > 0; i--) {
  console.log(`for: ${i}`);
}

for (let i = 3; i > 0; i = i - 2) {
  // inline variable declaration
  console.log(`inline variable for: ${i}`);
}
```

반복문은 중첩해서도 사용할 수 있는데, 이는 시간복잡도가 O(n^2)이 되기 때문에 되도록이면 쓰지 않는 것이 좋다.
```javascript
for (let i = 0; i < 10; i++) {
  for (let j = 0; j < 10; j++) {
    console.log(`i: ${i}, j: ${j}`);
  }
}
```

다음은 조건문과 반복문 사용의 예시 문제이다. (break, continue 사용)
```javascript
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
```
※ 1번 문제는 continue를 쓰지 않고 바로 짝수만 출력하도록 하는 것이 더 간단하지만 continue 사용 예시를 나타내기 위해 이와 같이 작성한 것이다.   

## Function

### function의 특징
- fundamental building block in the program: 프로그램을 구성하는 기본적인 빌딩 블록   
- subprogram can be used multiple times: subprogram이라고도 불리며 여러 번 재사용이 가능하다는 장점이 있다.   
- performs a task or calculates a value: 대체적으로 한 가지의 일을 수행하거나 값을 계산하기 위해 사용된다.   

### 1. function declaration (함수 선언 방법)
function name(param1, param2) { body... return; }   
- naming: doSomething, command, verb 형태   
- 함수 이름을 짓기가 어렵다면 너무 많은 기능을 하는 함수를 만들지는 않았는지 확인해보아야한다.   
  ex) createCardAndPoint -> createCard, createPoint   
- function is object in JS   
  자바스크립트에서 function은 object이기 때문에 변수에 할당할 수도 있고 파라미터로 전달할 수도 있으며 함수를 return할 수도 있다.   
  
```javascript
function printHello() {
  console.log("Hello");
}

printHello();

// function with parameters

function log(message) {
  console.log(message);
}

log("Hello!");
```
❕ 하지만 자바스크립트에는 단점이 있는데, 타입이 없다는 것이다.     
따라서 위의 코드에서 볼 수 있듯이 타입이 없어서 함수 자체의 인터페이스만 보았을 때는 메시지를 전달할 때 어떤 타입으로 전달해야 할지 명확하지 않아 타입이 중요한 함수에서는 난해할 수도 있게 된다.   
-> 이 문제점을 해결하기 위해 TypeScript에서는 타입을 지정하여 명확하게 나타낼 수 있도록 만들어졌다.

### 2. Parameters
- primitive parameters: passed by value   
- object parameters: passed by reference   

전달되는 파라미터의 종류로는 는 두 가지가 있는데, primitive type과 object type이 있다.   
primitive type은 메모리에 value가 그대로 저장되어 있기 때문에 value가 전달되고 object type은 메모리에 레퍼런스가 저장되기 때문에 레퍼런스가 전달된다.   

```javascript
// primitive parameter
function changeName(obj) {
  obj.name = "coder";
}
//object parameter
const ellie = { name: "ellie" };
changeName(ellie);
console.log(ellie);
```

### 3. Default parameters (added in ES6)
ES6 이전에는 파라미터에 값이 전달되지 않을 경우를 대비해서 if문을 통해 구현해야했는데, ES6부터는 파라미터에 원하는 default 값을 바로 지정해줄 수 있어 간편하게 처리할 수 있다.    

```javascript
// ES6 이전 코드
function showMessage(message, from = "unknown") {
  if (from === undefined) {
      from = "unknown";
  }
  console.log(`${message} by ${from}`);
}

// ES6
function showMessage(message, from = "unknown") {
  console.log(`${message} by ${from}`);
}
```

### 4. Rest parameters (added in ES6)
```javascript
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
```

...args와 같이 .을 3개 작성하는 것을 Rest parameters라고 부르는데 이것은 함수를 호출할 때 인자들이 배열 형태로 전달되게 된다.   
위에 작성한 for문들은 전달 받은 값들을 차례대로 출력하는 코드인데 위와 같이 3가지 방법으로 작성할 수 있다. 2번째와 3번째 방법은 같은 코드를 더 간단하게 작성하는 방법이다.   

### 5. Local scope
안에서는 밖을 볼 수 없지만 밖에서는 안을 볼 수 있다.   

```javascript
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
}

printMessage();
```

### 6. Return a value
```javascript
function sum(a, b) {
  return a + b;
}

const result = sum(1, 2); // 3
console.log(`sum: ${sum(1, 2)}`);
```
※ return type이 없는 함수들은 기본적으로 return undefined 들어가있는 것과 똑같다.(생략 가능)   

### 7. Early return, early exit
현업에서 코드 리뷰 시 많이 들어볼 수 있는 말로, 최대한 빨리 리턴을 해주는 것이 좋다는 것이다.   
어떤 조건일 때 로직을 수행하도록 만드는 코드를 작성해야하는 경우 아래의 코드와 같이 조건이 맞지 않을 때 return해서 함수를 종료하고 필요한 로직은 그 뒤에 작성하여 조건이 맞을 때만 실행하도록 하는 것이 더 좋은 코드라는 것이다.    
⁎ 활용: 조건이 맞지 않는 경우, 값이 undefined일 경우, 값이 -1인 경우 등

```javascript
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
```

## First-class function
: functions are treated like any other variable (함수를 변수처럼 다룬다는 것이다.)
- can be assigned as a value to varaiabe: 변수에 할당 가능
- can be passed as an argument to other functions: function에 파라미터로 전달 가능
- can be returned by another function: 리턴 값으로 리턴 가능

### 1. Function expression

```javascript
const print = function () {
  // anonymous function
  console.log("print");
};

print();

const printAgain = print;
printAgain();

const sumAgain = sum;
console.log(sumAgain(1, 3));
```

> #### function declaration과 function expression의 차이점
- a function declaration can be called earlier than it is defined.(hoisted)    
- a function expression is created when the execution reaches it     

function expression은 함수가 변수에 할당된 다음부터 호출이 가능하지만, function declaration은 hoisting이 된다. 함수가 선언되기 이전에 호출이 가능하다는 것이다. 이는 자바스크립트 엔진이 선언된 것을 제일 위로 올려주기 때문이다.   

### 2. Callback function using function expression

```javascript
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
```

위의 예시에서 randomQuiz 함수를 보면, answer와 answer가 맞을 때 호출하게 될 함수 printYes, answer가 틀릴 때 호출하게 될 함수 printNo를 전달해주는데, 이를 Callback function라고 한다. 이 두 개의 Callback functions가 파라미터로 전달이 된다.

- #### anoymous function    
: 함수의 이름을 지정하지 않고 함수를 바로 변수에 할당해주는 것이다.  
- #### named function    
: 함수의 이름을 지정하고 그 함수를 변수에 할당해주는 것이다.   
함수의 이름을 지정하면 디버깅을 할 때 디버거의 stack traces에 함수의 이름이 나오기 때문에 이것이 필요한 상황일 경우에 사용한다. 또한 함수를 재귀적으로 호출이 필요할 경우에 사용한다.    
    
- #### Arrow function
  - very concise    
  - always anoymous    

: arrow function은 매우 간결하다는 장점이 있고 arrow function으로 작성할 때는 항상 anoymous function로 써야 한다.    

```javascript
const simplePrint = () => console.log("simplePrint!");
const add = (a, b) => a + b;
const simpleMultiply = (a, b) => {
  // do something more
  return a * b;
};
```

### ❕ IIFE: Immediately Invoked Function Expression
함수를 정의한 후 따로 호출하지 않고 바로 실행하고 싶을 때 사용하는 방법이다. 함수 전체를 소괄호()로 씌운 뒤에 마지막 부분에 파라미터를 전달해주거나 없으면 빈 괄호를 쓰면 바로 실행된다.    

```javascript
(function hello() {
  console.log("IIFE");
})();
```

## Class (introduced in ES6)
### class와 object의 차이점
- **class**: template
- **object**: instance of a class

### 1. Class declarations: 클래스 선언
```javascript
class Person {
  // constructor
  constructor(name, age) {
    // fields
    this.name = name;
    this.age = age;
  }

  // methods
  speak() {
    console.log(`${this.name}: hello!`);
  }
}

const ellie = new Person("ellie", 20); // object
console.log(ellie.name);
console.log(ellie.age);
ellie.speak();
```

### 2. Getter and Setter
: 사용자가 실수로 잘못 사용해도 조금 더 방어적인 자세로 만들 수 있도록 해주는 것   
- get이라는 키워드를 이용해서 리턴하고, set이라는 키워드를 이용해서 값을 설정해줄 수 있다.
- age에 대한 getter를 정의하는 순간, this.age는 메모리에 올라가있는 데이터를 읽어들이는 것이 아니라 바로 getter를 호출한다.
- age에 대한 setter를 정의하는 순간, = age; 값을 할당할 때 메모리의 값을 할당하는 것이 아니라 바로 setter를 호출한다.
- getter와 setter에 쓰이는 변수의 이름을 다르게 설정하는 이유는 계속 값이 setter를 호출하게 되어 call stack이 다 차는 것을 방지하기 위해서이다.

```javascript
class User {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  get age() {
    return this._age;
  }

  set age(value) {
    this._age = value < 0 ? 0 : value;
    
  }
}

const user1 = new User("Steve", "Jobs", -1);
console.log(user1.age);
```

### 3. Fields (public , private)
※ Too soon! -> 이제는 지원이 거의 다 되는 듯하다.   
- public: 외부에서 접근 가능
-  private: 클래스 내부에서만 값이 보여지고 변경 가능하지만 클래스 외부에서는 값에 접근할 수 없다. 변수 앞에 #을 쓰면 private가 된다.   

```javascript
class Experiment {
  publicField = 2; 
  #privateField = 0;
}
const experiment = new Experiment();
console.log(experiment.publicField);
console.log(experiment.privateField);
```

### 4. Static properties and methods
※ Too soon! -> 이제는 지원이 거의 다 되는 듯하다.   
: object마다 할당되는 것이 아니라 클래스 자체에 붙어있다. 따라서 호출할 때 클래스 이름을 이용해서 호출해야한다.
object에 상관없이, 들어오는 데이터에 상관없이 공통적으로 클래스에서 쓸 수 있는 거라면 static과 static method를 이용하여 작성하는 것이 메모리의 사용을 줄여줄 수 있다.

```javascript
class Article {
  static publisher = "Dream Coding";
  constructor(articleNumber) {
    this.articleNumber = articleNumber;
  }
  static printPublisher() {
    console.log(Article.publisher);
  }
}

// const article1 = new Article(1);
// const article2 = new Article(2);
console.log(Article.publisher);
Article.printPublisher();
```

### 5. Inheritance 상속
: a way for one class to extend another class   
공통적으로 쓰이는 속성 값을 한 번에 정의한 다음에 재사용하면 더 편리하고 유지보수가 쉬워진다.   

```javascript
class Shape {
  constructor(width, height, color) {
    this.width = width;
    this.height = height;
    this.color = color;
  }

  draw() {
    console.log(`drawing ${this.color} color of`);
  }

  getArea() {
    return this.width * this.height;
  }
}

class Rectangle extends Shape {}
class Triangle extends Shape {
  // overriding(재정의)
  draw() {
    super.draw(); // super: 부모의 메서드 호출
    console.log("🔺");
  }
  getArea() {
    return (this.width * this.height) / 2;
  }
}

const rectangle = new Rectangle(20, 20, "blue");
rectangle.draw();
console.log(rectangle.getArea());

const triangle = new Triangle(20, 20, "red");
triangle.draw();
console.log(triangle.getArea());
```

### 6. Class checking: instanceOf
: 왼쪽에 있는 object가 오른쪽에 있는 class의 오브젝트인지 check한다.   
즉, 왼쪽 object가 오른쪽 class를 이용해 만들어진 것인지 아닌지 확인한다.
```javascript
console.log(rectangle instanceof Rectangle); // true
console.log(triangle instanceof Rectangle); // false
console.log(triangle instanceof Triangle); // true
console.log(triangle instanceof Shape); // true
console.log(triangle instanceof Object); // true
```
❕ 우리가 만드는 모든 object들은 자바스크립트에 있는 Object를 상속한다.

## Objects
- one of the JavaScript's data types
- a collection of related data and/or functionality
- Nearly all objects in JavaScript are instances of Object.
- object = { key: value }; object는 key와 value의 집합체이다.

### 1. Literals and properties
객체를 생성할 수 있는 방법은 2가지가 있다.
- object literal: {}를 통해 생성한다.
- object constructor: new 키워드와 클래스 이름을 통해 생성한다.

```javascript
const obj1 = {}; // 'object literal' syntax
const obj2 = new Object(); // 'object contructor' syntax

function print(person) {
  console.log(person.name); // ellie
  console.log(person.age); // 4
}

const ellie = { name: "ellie", age: 4 }; // object
print(ellie);
```

> ### with JavaScript magic (dynamically typed language)
> - #### can add properties later   
> : JavaScript는 동적으로 타입이 Runtime(프로그램이 동작하고 있을 때) 결정되기 때문에 뒤늦게 object를 정의했음에도 불구하고 properties를 더 추가할 수 있다.    
> -> 하지만 유지보수가 힘들고 예상치 못한 에러가 발생할 수 있기 때문에 안쓰는 것이 좋다.   
> ```javascript
> ellie.hasJob = true;
> console.log(ellie.hasJob);
> ```
>   
> - #### can delete properties later
> Javascript는 나중에 properties를 지우는 것도 가능하다.   
>```javascript
> delete ellie.hasJob;
> console.log(ellie.hasJob);
>```

### 2. Computed properties: 계산된 properties
객체의 속성에 접근하는 방식은 2가지가 있다.
- #### object.property: .을 통해 접근하는 방법   
코딩하는 그 순간 key에 대한 value를 가져오고 싶을 때 사용한다.
- #### object["property"]: 배열에 접근하는 것처럼 [""]를 통해 접근하는 방법   
정확하게 어떤 key가 필요한지 모를 때 runtime에서 결정될 때 사용한다.   
-> 따라서 동적으로 key에 대한 value를 받아와야할 때 유용하게 쓸 수 있다.

```javascript
console.log(ellie.name);
console.log(ellie["name"]); // key should be always string
ellie["hasJob"] = true;
console.log(ellie.hasJob);

function printValue(obj, key) {
  console.log(obj[key]); // conputed property
  // console.log(obj.key); // undefined -> object에 key라는 property가 들어있지 않기 때문
}
printValue(ellie, "name");
printValue(ellie, "age");
```

### 3. Property value shorthand
Constructor Function에 property value를 만들어주면 객체 생성 시에 new 키워드와 함수 이름을 통해 객체를 간편하게 생성할 수 있다.
```javascript
const person1 = { name: "bob", age: 2 };
const person2 = { name: "steve", age: 3 };
const person3 = { name: "dave", age: 4 };
const person4 = new Person("ellie", 30); // Class에서 object를 만드는 것처럼 객체를 생성한다. 
console.log(person4);
```

### 4. Constructor Function
: Class Constructor 작성한 것처럼 쓰면 된다.   
```javascript
function Person(name, age) {
  // this = {};
  this.name = name;
  this.age = age;
  // return this;
}
```

### 5. in operator: property existence check (key in obj)
: in이라는 키워드를 통해 해당하는 key가 object에 있는지 없는지 확인할 수 있다.

```javascript
console.log("name" in ellie);
console.log("age" in ellie);
console.log("random" in ellie);
console.log(ellie.random); // undefined
```

### 6. for..in vs for..of
- #### for (key in obj)
in을 사용하여 객체의 키에 대한 값을 출력할 수 있다.

```javascript
for (key in ellie) {
  console.log(key);
}
```

- #### for (value of iterable)
배열에 접근할 때 of를 통해 더욱 간단하게 출력할 수 있다.   

```
const array = [1, 2, 4, 5];
for (value of array) {
  console.log(value);
}
```

### 7. Fun Cloning
```javascript
Object.assign(dest, [obj1, obj2, obj3,...])
```

#### <기존의 레퍼런스를 가리키도록 하는 방법>
```javascript
const user = { name: "ellie", age: 20 };
const user2 = user;
console.log(user);
```

#### <object를 복제하는 방법>
- ##### old way
```javascript
const user3 = {};
for (key in user) {
  user3[key] = user[key];
}
console.log(user3);
```

- ##### now
```javascript
const user4 = Object.assign({}, user);
console.log(user4);

// 여러 개의 source 전달
const fruit1 = { color: "red" };
const fruit2 = { color: "blue", size: "big" };
const mixed = Object.assign({}, fruit1, fruit2); // 여러 개일 때는 마지막에 있는 것으로 덮어씌워지게 됨
console.log(mixed.color); // blue
console.log(mixed.size); // big
```

## Array
### 1. Declaration: 배열 선언
: 배열의 선언 방법에는 2가지가 있다.
- new 키워드를 이용하여 선언하는 방법
```javascript
const arr1 = new Array();
```
- 대괄호를 이용하여 데이터를 넣어 만드는 방법
```javascript
const arr2 = [1, 2];
```

### 2. Index position
: 인덱스로 배열 접근하기

```javascript
const deserts = ["🍦", "🧁"];
console.log(deserts);
console.log(deserts.length);
console.log(deserts[0]);
console.log(deserts[1]);
console.log(deserts[2]);
console.log(deserts[deserts.length - 1]); // 마지막 인덱스 접근
```
※ 마지막 인덱스를 출력할 때 주로 length를 이용해 출력한다.

### 3. Looping over an array
: 배열의 모든 원소 접근하여 출력하는 방법에는 반복문을 이용한 3가지 방법이 있다.- 
- for
```javascript
for (let i = 0; i < deserts.length; i++) {
  console.log(deserts[i]);
}
```
- for of
```javascript
for (let desert of deserts) {
  console.log(desert);
}
```
- forEach
```javascript
deserts.forEach((desert) => console.log(desert));
```
Performs the specified action for each element in an array.    
forEach는 배열 안에 들어있는 value들마다 내가 전달한 함수를 출력한다   

### 4. Addition, deletion, copy
- #### 배열에 데이터 추가하기(뒤에)
**push**: add an item to the end
```javascript
deserts.push("🍩", "🍪");
console.log(deserts);
```
- #### 배열에 있는 데이터 삭제하기(뒤에서부터)
**pop**: remove an item from the end
```javascript
deserts.pop();
deserts.pop();
console.log(deserts);
```

- #### 배열의 가장 앞에 데이터 추가하기
**unshift**: add an item to the benigging
```javascript
deserts.unshift("🍰", "☕");
console.log(deserts);
```

- #### 배열의 가장 앞에 있는 데이터 삭제하기
**shift**: remove an item from the benigging   
```javascript
deserts.shift();
console.log(deserts);
```

> #### note!! shift, unshift are slower than pop, push    
> : shift와 unshirt는 전체 배열이 shift되어 가장 앞에 삽입되거나 가장 앞에 있는 데이터가 삭제되는 것이기 때문에 시간이 매우 오래 걸리므로 안쓰는 것이 좋다.    

- #### 원하는 위치의 데이터 삭제하기(+원하는 위치에 데이터 추가하기)
**splice**: remove an item by index position, inserts new elements in their place    
: 인덱스를 이용하여 삭제할 수 있고, 그 위치에 원하는 요소를 추가할 수도 있다.
```javascript
deserts.push("🍫", "🍮");
console.log(deserts);
deserts.splice(2, 1); // splice(인덱스, 인덱스로부터 지울 개수)
console.log(deserts);
deserts.splice(1, 1, "🎂", "🍭");
console.log(deserts);
```

- #### 두 배열 합치기
**concat**: combine two arrays   
```javascript
const deserts2 = ["🥐", "🥨"];
const newDeserts = deserts.concat(deserts2);
console.log(newDeserts);
```

### 5. Searching
- #### indexOf: find the index
: Returns the index of the first occurrence of a value
배열 안에 있는 데이터를 입력하면 해당 데이터의 인덱스 위치를 반환한다.(해당 데이터가 배열에 여러 개 있는 경우에는 가장 앞에 있는 데이터를 반환한다.)   
만약 그 데이터가 배열에 없다면, -1을 반환한다.
```javascript
console.clear();
console.log(deserts);
console.log(deserts.indexOf("🍭")); // 2
console.log(deserts.indexOf("🍩")); // -1
```

- #### includes
: Determines whether an array includes a certain element, returning true or false as appropriate.   
배열 안에 해당 데이터가 있는지 확인하여 true/false로 반환한다.
```javascript
console.log(deserts.includes("🎂")); // true
console.log(deserts.includes("🧁")); // false
```

- #### lastIndexOf
: Returns the index of the last occurrence of a specified value in an array   
해당 데이터가 배열에 여러 개 있을 때, 가장 마지막에 있는 데이터를 반환한다.   
```javascript
console.clear();
deserts.push("☕");
console.log(deserts);
console.log(deserts.indexOf("☕")); // 0
console.log(deserts.lastIndexOf("☕")); // 5
```
