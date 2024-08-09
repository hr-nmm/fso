"use strict";
const x = 1;
let y = 5;
console.log(x, y); // 1, 5 are printed
y += 10;
console.log(x, y); // 1, 15 are printed
y = "sometext";
console.log(x, y); // 1, sometext are printed
// x = 4; // causes an error

// array
const t = [1, 12, -21];
t.push(420); // const declaration ensures the immutability of the reference itself, not the data it points to.
// Think of it like changing the furniture inside a house, while the address of the house remains the same.
console.log(t.length); // 4 is printed
console.log(t[1]); // 12 is printed

t.forEach((value) => {
  console.log(value); // numbers 1, 12, -21, 420 are printed, each on its own line
});

// use of map
const arr1 = [1, 2, 3];

const m1 = arr1.map((value) => value * 2);
console.log(m1); // [2, 4, 6] is printed

// destructive assignment
const lst = [1, 2, 3, 4, 5];

const [first, second, ...rest] = lst;

console.log(first, second); // 1, 2 is printed
console.log(rest); // [3, 4, 5] is printed

// OBJECTS
const object1 = {
  name: "Arto Hellas",
  age: 35,
  education: "PhD",
};

const object2 = {
  name: "Full Stack web application development",
  level: "intermediate studies",
  size: 5,
};

const object3 = {
  name: {
    first: "Dan",
    last: "Abramov",
  },
  grades: [2, 3, 5, 3],
  department: "Stanford University",
};
console.log(object1.name); // Arto Hellas is printed
const fieldName = "age";
console.log(object1[fieldName]); // 35 is printed

// objects are mutable
object1.address = "Helsinki";
object1["secret number"] = 12341;

// functions
const sum = (p1, p2) => {
  console.log(p1);
  console.log(p2);
  return p1 + p2;
};
const result = sum(1, 5);
console.log(result); // 6

const square = (p) => p * p;
const tarr = [1, 2, 3];
const tSquared = tarr.map(square);
console.log(tSquared);
// tSquared is now [1, 4, 9]
function product(a, b) {
  return a * b;
}

const result1 = product(2, 6);
// result1 is now 12
const average = function (a, b) {
  return (a + b) / 2;
};

const result2 = average(2, 5);
// result is now 3.5

// OBJECT: methods and this
const kobe = {
  name: "Kobe Bryant",
  age: 24,
  education: "High school",
  greet: function () {
    console.log(`Hello, my name is  ${this.name}`);
  },
};
kobe.greet(); // Hello, my name is  Kobe Bryant

kobe.growOlder = function () {
  this.age += 1;
};

console.log(kobe.age); // 24 is printed
kobe.growOlder();
console.log(kobe.age); // 25 is printed

// copying func
kobe.doAddition = function (a, b) {
  console.log(a + b);
};
kobe.doAddition(1, 5); // 6 is printed
const referenceToAddition = kobe.doAddition;
referenceToAddition(1, 5); // 6 is printed again

// The value of this in JavaScript is defined based on how the method is being called. When setTimeout is calling the method, it is the JavaScript engine that actually calls the method and, at that point, this refers to the global object.

setTimeout(kobe.greet, 1000); // Hello, my name is  undefined
setTimeout(kobe.greet.bind(kobe), 1000); // Hello, my name is  Kobe Bryant

// CLASSES

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  greet() {
    console.log("hello, my name is " + this.name);
  }
}

const adam = new Person("Adam Ondra", 29);
adam.greet(); // hello, my name is Adam Ondra

const janja = new Person("Janja Garnbret", 23);
janja.greet(); //  hello, my name is Janja Garnbret
