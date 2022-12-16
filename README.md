# JavaScript 정리

## 목차
[1. 콘솔에 출력하기](#콘솔에-출력하기)   
[2. script async와 defer의 차이점](#script-async와-defer의-차이점)   
[3. Data types](#data-types)    
[4. Operators](#operators)    

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

