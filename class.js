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
// 사용자가 실수로 잘못 사용해도 조금 더 방어적인 자세로 만들 수 있도록 해주는 것
// get이라는 키워드를 이용해서 리턴하고, set이라는 키워드를 이용해서 값을 설정해줄 수 있다.
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
    // 계속 값이 setter를 호출하게 되어 call stack이 다 차는 것을 방지하기 위해 getter와 setter에 쓰이는 변수의 이름을 다르게 설정해준다.
  }
}

const user1 = new User("Steve", "Jobs", -1);
console.log(user1.age);
// age에 대한 getter를 정의하는 순간 this.age는 메모리에 올라가있는 데이터를
// 읽어들이는 것이 아니라 바로 getter를 호출한다.
// age에 대한 setter를 정의하는 순간 = age; 값을 할당할 때 메모리의 값을 할당하는
// 것이 아니라 바로 setter를 호출한다.

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
// Too soon! -> 이것도 이제는 지원 거의 다 되는 듯
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
// static과 static method를 이용하여 작성하는 것이 메모리의 사용을 줄여줄 수 있다.

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
