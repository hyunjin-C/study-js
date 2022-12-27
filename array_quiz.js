//string api: 396~518
// array api: 1269~1451

// 정답 아님 (문제 풀어본 것), 정답: array-api.js

// Q1. make a string out of an array
{
  const fruits = ["apple", "banana", "orange"];

  console.log("q1: ", fruits.toString());
}

// Q2. make an array out of a string
{
  const fruits = "🍎, 🥝, 🍌, 🍒";
}

const fruits = ["🍎", "🥝", "🍌", "🍒"];
console.log(result);

// Q3. make this array look like this: [5, 4, 3, 2, 1]
{
  const array = [1, 2, 3, 4, 5];
  //   const array2 = [];
  //   for (i = array.length - 1; i > -1; i--) {
  //     array2.push(array.pop());
  //   }
  //   console.log(array2);
  console.log("q3: ", array.reverse());
}

// Q4. make new array without the first two elements
{
  const array = [1, 2, 3, 4, 5];

  array.splice(0, 2);
  console.log("q4: ", array);
}

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

// Q5. find a student with the score 90 ⭐
{
  console.log("q5: ", students.score.indexOf(90), students.name);
}

// Q6. make an array of enrolled students
{
  enrolled_students = [];
  students.forEach((student) => {
    if (student.enrolled === true) {
      enrolled_students.push(student.name);
    }
  });
  console.log(enrolled_students);
}

// Q7. make an array containing only the students' scores
// result should be: [45, 80, 90, 66, 88]
{
  student_score = [];
  for (let i = 0; i < students.length; i++) {
    student_score.push(students[i].score);
  }
  console.log(student_score);
}

// Q8. check if there is a student with the score lower than 50
{
  for (let i = 0; i < students.length; i++) {
    if (students[i].score < 50) {
      console.log(`${students[i].name}: true`);
    } else {
      console.log(`${students[i].name}: false`);
    }
  }
}

// Q9. compute students' average score
{
  let sum = 0;
  let avg = 0;
  for (let i = 0; i < students.length; i++) {
    sum += students[i].score;
  }
  avg = sum / students.length;
  console.log(avg);
}

// Q10. make a string containing all the scores
// result should be: '45, 80, 90, 66, 88'
{
  console.log(student_score.toString());
}

// Bonus! do Q10 sorted in ascending order
// result should be: '45, 66, 80, 88, 90'
{
  console.log(student_score.sort().toString());
}
