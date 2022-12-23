"use strict";

// Array

// 1. Declaration
const arr1 = new Array();
const arr2 = [1, 2];

// 2. Index position
const deserts = ["🍦", "🧁"];
console.log(deserts);
console.log(deserts.length);
console.log(deserts[0]);
console.log(deserts[1]);
console.log(deserts[2]);
console.log(deserts[deserts.length - 1]); // 마지막 인덱스를 출력할 때 주로 length를 이용해 출력함

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
// 배열 안에 들어있는 value들마다 내가 전달한 함수를 출력한다.

// 4. Addition, deletion, copy
// push: add an item to the end
deserts.push("🍩", "🍪");
console.log(deserts);

// pop: remove an item from the end
deserts.pop();
deserts.pop();
console.log(deserts);

// add an item to the benigging
deserts.unshift("🍰", "☕");
console.log(deserts);

// remove an item from the benigging
deserts.shift();
console.log(deserts);

// note!! shift, unshift are slower than pop, push
// shift와 unshirt는 전체 배열이 shift되어 삽입되는 것이기 때문에 시간이 매우 오래 걸리므로 안쓰는 것이 좋다.

// splice: remove an item by index position, inserts new elements in their place
// 인덱스를 이용하여 삭제할 수 있고, 그 위치에 원하는 요소를 추가할 수도 있다.
deserts.push("🍫", "🍮");
console.log(deserts);
deserts.splice(2, 1); // splice(인덱스, 인덱스로부터 지울 개수)
console.log(deserts);
deserts.splice(1, 1, "🎂", "🍭");
console.log(deserts);

// combine two arrays
const deserts2 = ["🥐", "🥨"];
const newDeserts = deserts.concat(deserts2);
console.log(newDeserts);

// 5. Searching
// indexOf: find the index
// Returns the index of the first occurrence of a value
console.clear();
console.log(deserts);
console.log(deserts.indexOf("🍭")); // 2
console.log(deserts.indexOf("🍩")); // -1

// includes
console.log(deserts.includes("🎂")); // true
console.log(deserts.includes("🧁")); // false

// lastIndexOf
// Returns the index of the last occurrence of a specified value in an array
console.clear();
deserts.push("☕");
console.log(deserts);
console.log(deserts.indexOf("☕"));
console.log(deserts.lastIndexOf("☕"));
