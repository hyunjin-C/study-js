// 1. Use strict (added in ES5)
"use strict";

// 2. Variable
// let (added in ES6)
// - mutable datatype: 값을 변경할 수 있는 데이터타입
let globalName = "global name";
{
  let name = "hj";
  console.log(name);
  name = "hello";
  console.log(name);
}
console.log(name);
console.log(globalName);

// var (don't ever use this!!): 변수 선언할 때 절대 var X
// var hoisting (move declaration from bottom to top: 어디에 선언했는지와 상관없이 항상 제일 위로 선언을 끌어올려주는 것을 의미)
// has no block scope: 블록을 이용해서 선언해도 무시하고 밖에서도 정상적으로 출력됨

// 3. Constants: 절대 값을 변경할 수 없는 데이터 타입
// favor immutable data type always for a few reasons:
// - security
// - thread safety
// - reduce human mistakes
const daysInweek = 7;
const maxNumber = 5;
console.log(daysInweek);
console.log(maxNumber);

// 4. Variable types
// primitive - single item: number, string, boolean, null, undefined, symbol
// object - box container: function, first-class function(function도 다른 데이터타입처럼 변수에 할당이 가능하고, 함수의 파라미터, 인자로도 전달이 되고 리턴타입으로도 function을 리턴할 수 있는 것)

// JavaScript는 타입이 다이나믹하게 결정이 되기 때문에 숫자를 넣을 변수를 선언할 때 number라고 데이터타입을 선언하지 않아도 된다.

const count = 15; // integer: 정수
const size = 12.5; // decimal number: 소수
console.log(`value: ${count}, type: ${typeof count}`);
console.log(`value: ${size}, type: ${typeof size}`);

// number - special numberic values: infinity, -infinity, NaN
const infinity = 1 / 0; // positive value(양수)를 0으로 나누면 Infinity
const negativeInfinity = -1 / 0; // negative value(음수)를 0으로 나누면 Negative Infinity
const nAn = "not a number" / 2;
console.log(infinity);
console.log(negativeInfinity);
console.log(nAn); // 연산을 할 때 항상 그 값이 valid한지 확인한 후 연산하는 것이 중요

// bigInt (fairly new, don't use it yet: 아직 chrome과 firefox에서만 지원됨)
const bigInt = 123456789012345678901234567890n; // over (-2**53 ~ 2**53)
console.log(`value: ${bigInt}, type: ${typeof bigInt}`);

// string
const char = "c";
const brendan = "brendan";
const greeting = "hello " + brendan;
console.log(`value: ${greeting}, type: ${typeof greeting}`);
const helloBob = `hi ${brendan}!`; // template literals (string): 백틱(``)기호를 사용해 원하는 문자열을 적고 ${}를 사용하여 변수의 값을 바로 사용할 수 있음
console.log(`value: ${helloBob}, type: ${typeof helloBob}`); // 백틱을 사용하면 이와 같이 간편하게 문자열을 만들 수 있음
console.log("value: " + helloBob + "type: " + typeof helloBob); // 백틱을 사용하지 않았을 때

// boolean
// false: 0, null, undefined, NaN, ''
// true: any other value
const canRead = true;
const test = 3 < 1; // false
console.log(`value: ${canRead}, type: ${typeof canRead}`);
console.log(`value: ${test}, type: ${typeof test}`);

// null: 명확하게 empty 값이라고 지정, null이라고 값을 할당해준 상태
let nothing = null;
console.log(`value: ${nothing}, type: ${typeof nothing}`);

// undefined: 선언은 되었지만 아무 값이 할당되어지지 않은 상태
let x;
console.log(`value: ${x}, type: ${typeof x}`);

// symbol: create unique identifiers for objects
const symbol1 = Symbol("id");
const symbol2 = Symbol("id");
console.log(symbol1 === symbol2); // false
const gsymbol1 = Symbol.for("id");
const gsymbol2 = Symbol.for("id");
console.log(gsymbol1 === gsymbol2); // true
console.log(`value: ${symbol1.description}, type: ${typeof symbol1}`); // symbol을 그냥 출력하면 에러가 발생하는데, .description을 통해 string으로 변환해야 에러가 안남

// 5. Dynamic typing: dynamically typed language
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
