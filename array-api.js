// Q1. make a string out of an array
{
  const fruits = ["apple", "banana", "orange"];

  // toString(): Returns a string representation of an array.
  const result = fruits.join(" | ");
  console.log(result);

  // join(separator?: string): string;: Adds all the elements of an array into a string, separated by the specified separator string.
  console.log(fruits.toString());

  // toString과 join의 기능은 같지만 다른 점은 join을 사용하면 separator를 넣을 수 있다는 것이다.
}

// Q2. make an array out of a string
{
  const fruits = "🍎, 🥝, 🍌, 🍒";
  // Split a string into substrings using the specified separator and return them as an array.
  // split(separator: string | RegExp, limit?: number): string[];
  const result = fruits.split(",");
  console.log("q2: ", result);
}

// join(separator?)과 split(separator, limit?)은 반대되는 개념이다.
// join은 array->string이고, split은 string->array

// Q3. make this array look like this: [5, 4, 3, 2, 1]
{
  const array = [1, 2, 3, 4, 5];
  const result = array.reverse();
  console.log("q3 result: ", result);
  console.log("q3 array: ", array);
}

// reverse(): This method mutates the array and returns a reference to the same array.
// 반환값이 reverse되는 것뿐만 아니라 배열 자체도 reverse된다.

// Q4. make new array without the first two elements
{
  const array = [1, 2, 3, 4, 5];

  const result = array.splice(0, 2);
  console.log("q4 splice: ", result);
  console.log("q4 array: ", array);
  // splice는 array 배열 자체를 변환하고 반환되는 값은 제거하는 값이므로
  // 새로운 함수를 만들 때는 사용할 수 없다. 이때는 slice를 사용해야 한다.
}

{
  const array = [1, 2, 3, 4, 5];

  // slice(start?: number, end?: number): T[];
  // : Returns a copy of a section of an array.
  const result2 = array.slice(2, 5);
  console.log("q4 slice: ", result2);
  console.log("q4 array: ", array);
}

// splice는 배열 자체를 수정하는 것이고 slice는 배열에서 원하는 부분만 리턴해서 가져오고 싶을 때 사용한다.

class Student {
  constructor(name, age, enrolled, score) {
    this.name = name;
    this.age = age;
    this.enrolled = enrolled;
    this.score = score;
  }
}
const students = [
  new Student("A", 29, true, 45),
  new Student("B", 28, false, 80),
  new Student("C", 30, true, 90),
  new Student("D", 40, false, 66),
  new Student("E", 18, true, 88),
];

// Q5. find a student with the score 90
{
  const result = students.find((student) => student.score === 90);
  console.log("q5: ", result);
}

// Q6. make an array of enrolled students
{
  const result = students.filter((student) => student.enrolled);
  console.log("q6: ", result);
}

// Q7. make an array containing only the students' scores
// result should be: [45, 80, 90, 66, 88]

// map: 배열 안에 들어있는 모든 요소들을 callback 함수들에서 가공되어진 값으로 리턴되어진다.
{
  const result = students.map((student) => student.score);
  console.log("q7: ", result);
}

// Q8. check if there is a student with the score lower than 50
{
  const result1 = students.some((student) => student.score < 50);
  console.log("q8(some): ", result1);

  const result2 = !students.every((student) => student.score >= 50);
  console.log("q8(every): ", result2);
}
// some: 하나라도 만족되는 조건이 있다면 true가 리턴됨
// every: 모든 조건이 충족되어야 true가 리턴된다.
// 배열 중에 하나라도 만족되는 조건이 있는지 확인하고 싶으면 some을 사용하고,
// 모든 조건이 만족되어야할 때는 every를 쓰는 것이 좋다.

// Q9. compute students' average score
{
  const result = students.reduce((prev, curr) => prev + curr.score, 0);
  console.log("q9: ", result / students.length);
}

// reduce: Calls the specified callback function for all the elements in an array.
// reduce<U>(callbackfn: (previousValue: U, currentValue: T, currentIndex: number, array: T[]) => U, initialValue: U): U;

// Q10. make a string containing all the scores
// result should be: '45, 80, 90, 66, 88'
{
  const result = students.map((student) => student.score).join(", ");
  console.log("q10: ", result);
}

// Bonus! do Q10 sorted in ascending order
// result should be: '45, 66, 80, 88, 90'
{
  const result = students.map((student) => student.score);
  console.log("q10+: ", result.sort((a, b) => a - b).join(", "));
}

// result.sort((a + b) => b - a)는 큰 수부터 정렬됨.
