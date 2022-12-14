"use strict";

// Array

// 1. Declaration
const arr1 = new Array();
const arr2 = [1, 2];

// 2. Index position
const deserts = ["๐ฆ", "๐ง"];
console.log(deserts);
console.log(deserts.length);
console.log(deserts[0]);
console.log(deserts[1]);
console.log(deserts[2]);
console.log(deserts[deserts.length - 1]); // ๋ง์ง๋ง ์ธ๋ฑ์ค๋ฅผ ์ถ๋ ฅํ  ๋ ์ฃผ๋ก length๋ฅผ ์ด์ฉํด ์ถ๋ ฅํจ

// 3. Looping over an array
// print all deserts
console.clear();

// for of
for (let desert of deserts) {
  console.log(desert);
}

// a. for
for (let i = 0; i < deserts.length; i++) {
  console.log(deserts[i]);
}

// c. forEach
deserts.forEach((desert) => console.log(desert));
// ๋ฐฐ์ด ์์ ๋ค์ด์๋ value๋ค๋ง๋ค ๋ด๊ฐ ์ ๋ฌํ ํจ์๋ฅผ ์ถ๋ ฅํ๋ค.

// 4. Addition, deletion, copy
// push: add an item to the end
deserts.push("๐ฉ", "๐ช");
console.log(deserts);

// pop: remove an item from the end
deserts.pop();
deserts.pop();
console.log(deserts);

// add an item to the benigging
deserts.unshift("๐ฐ", "โ");
console.log(deserts);

// remove an item from the benigging
deserts.shift();
console.log(deserts);

// note!! shift, unshift are slower than pop, push
// shift์ unshirt๋ ์ ์ฒด ๋ฐฐ์ด์ด shift๋์ด ์ฝ์๋๋ ๊ฒ์ด๊ธฐ ๋๋ฌธ์ ์๊ฐ์ด ๋งค์ฐ ์ค๋ ๊ฑธ๋ฆฌ๋ฏ๋ก ์์ฐ๋ ๊ฒ์ด ์ข๋ค.

// splice: remove an item by index position, inserts new elements in their place
// ์ธ๋ฑ์ค๋ฅผ ์ด์ฉํ์ฌ ์ญ์ ํ  ์ ์๊ณ , ๊ทธ ์์น์ ์ํ๋ ์์๋ฅผ ์ถ๊ฐํ  ์๋ ์๋ค.
deserts.push("๐ซ", "๐ฎ");
console.log(deserts);
deserts.splice(2, 1); // splice(์ธ๋ฑ์ค, ์ธ๋ฑ์ค๋ก๋ถํฐ ์ง์ธ ๊ฐ์)
console.log(deserts);
deserts.splice(1, 1, "๐", "๐ญ");
console.log(deserts);

// combine two arrays
const deserts2 = ["๐ฅ", "๐ฅจ"];
const newDeserts = deserts.concat(deserts2);
console.log(newDeserts);

// 5. Searching
// indexOf: find the index
// Returns the index of the first occurrence of a value
console.clear();
console.log(deserts);
console.log(deserts.indexOf("๐ญ")); // 2
console.log(deserts.indexOf("๐ฉ")); // -1

// includes
console.log(deserts.includes("๐")); // true
console.log(deserts.includes("๐ง")); // false

// lastIndexOf
// Returns the index of the last occurrence of a specified value in an array
console.clear();
deserts.push("โ");
console.log(deserts);
console.log(deserts.indexOf("โ"));
console.log(deserts.lastIndexOf("โ"));
