"use strict";

// <Object-oriented programming>
// class: template
// object: instance of a class

// JavaScript classes
// - introduced in ES6
// - syntactical sugar over prototype-based inheritance

// 1. Class declarations
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

const ellie = new Person("ellie", 20);
console.log(ellie.name);
console.log(ellie.age);
ellie.speak();

// 2. Getter and setters
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
// 추가 설명

// 3. Fields (public , private)
// Too soon! -> 이제는 지원이 거의 다 되는 듯하다.
class Experiment {
  publicField = 2; // public: 외부에서 접근 가능
  #privateField = 0; // private: 클래스 내부에서만 값이 보여지고 변경 가능하지만 클래스 외부에서는 값에 접근할 수 없다.
}
const experiment = new Experiment();
console.log(experiment.publicField);
console.log(experiment.privateField);

// 4. Static properties and methods
// Too soon!
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

// object에 상관없이, 들어오는 데이터에 상관없이 공통적으로 클래스에서 쓸 수 있는 거라면
// static을 이용하여 작성하는 것이 메모리의 사용을 줄여줄 수 있다.

// 5. Inheritance
// a way for one class to extend another class.
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

// 6. Class checking: instanceOf
// 왼쪽에 있는 object가 오른쪽에 있는 class의 오브젝트인지 check한다.
// 즉, 왼쪽 object가 오른쪽 class를 이용해 만들어진 것인지 아닌지 확인한다.
console.log(rectangle instanceof Rectangle); // true
console.log(triangle instanceof Rectangle); // false
console.log(triangle instanceof Triangle); // true
console.log(triangle instanceof Shape); // true
console.log(triangle instanceof Object); // true

// 우리가 만드는 모든 object들은 자바스크립트에 있는 Object를 상속한다.
