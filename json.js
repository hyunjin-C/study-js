// JSON
// JavaScript Object Notation

// 1. Object to JSON
// stringify
let json = JSON.stringify(["apple", "banana"]);
console.log(json);

const rabbit = {
  name: "tori",
  color: "white",
  size: null,
  birthDate: new Date(),
  // symbol: Symbol("id"), // JavaScript에만 있는 특별한 데이터도 JSON에 포함되지 않음
  jump: () => {
    console.log(`${this.name} can jump!`);
  }, // 함수는 object에 있는 데이터가 아니기 때문에 JSON으로 변환하면 보이지 않음
};

json = JSON.stringify(rabbit);
console.log(json);

// 원하는 property만 출력하기
json = JSON.stringify(rabbit, ["name", "color", "size"]);
console.log(json);

// callback 함수 전달: 세밀하게 통제하고 싶을 때 사용
json = JSON.stringify(rabbit, (key, value) => {
  console.log(`key: ${key}, value: ${value}`);
  return key === "name" ? "ellie" : value;
});
console.log(json);

// 2. JSON to Object
// parse
console.clear();
json = JSON.stringify(rabbit);
console.log(json);
const obj = JSON.parse(json, (key, value) => {
  console.log(`key: ${key}, value: ${value}`);
  return key === "birthDate" ? new Date(value) : value; // birthDate를 새로운 object로 만들어줌
});
console.log(obj);
rabbit.jump();
// obj.jump();

// 유의할 점!
// rabbit을 JSON으로 변환할 때 데아터만 변환되고 함수는 포함되지 않기 때문에
// 다시 JSON에서 object로 변환할 때도 함수가 포함되지 않으므로 그 object에는
// jump라는 기능이 없다.

console.log(rabbit.birthDate.getDate());
console.log(obj.birthDate.getDate());
// json으로 변환될 때 birthDate가 string로 만들어졌기 때문에
// 이 json을 다시 object로 가져올 때도 string으로 할당이 되어졌다.
// 하지만 원래 rabbit.birthDate는 object 자체였기 때문에 다시 세밀하게
// Date() object로 변환하고 싶을 때는 callback 함수를 이용하면 된다.

// <json 관련 유용한 웹사이트>
// 서버에서 요청했을 때 첫 번째로 받아 온 결과와 두 번째로 받아온 결과가 어떻게
// 다른지 비교할 수 있는 사이트(문제를 디버깅할 때): JSON Diff

// 서버에서 받아 온 JSON을 붙여넣으면 가끔 format이 망가질 때가 있는데 이를
// 올바르게 만들어주는 사이트: JSON Beautifier

//  JSON 타입을 object로 확인해보고 싶을 때, JSON으로부터 Object가 어떻게
// 표기되어지는지 알 수 있는 사이트: JSON Parser

// 유효한 JSON 데이터인지 확인할 수 있는 사이트: JSON Validator
