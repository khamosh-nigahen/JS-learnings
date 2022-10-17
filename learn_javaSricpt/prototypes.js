"use strict";

const Person = function (firstName, birthYear) {
  //   console.log(this);
  // instance properties
  this.firstName = firstName;
  this.birthYear = birthYear;
  this.greet = function () {
    return `Hey ${this.firstName}`;
  };
};

const p1 = new Person("Jones", 1991);
// console.log(p1);
const p2 = new Person("Jones", 1991);

console.log("########");
console.log(Person.prototype);
console.log(Person.__proto__);

console.log(p1);

Person.prototype.calcAge = function () {
  return `Hey we did not calculate age!`;
};

console.log(p1.calcAge());

console.log(p1.__proto__ === Person.prototype);

console.log(p1.__proto__);
console.log(Person.prototype);
console.log("@@@@@@");
console.log(Person.prototype.prototype);
console.log(Person.__proto__.__proto__.__proto__);

p2.getSurname = function () {
  return `yet to have a surname`;
};

console.log(p2.getSurname());
console.log(p1.hasOwnProperty("getSurname"));

console.log(p2.hasOwnProperty("getSurname"));

// normal object
const obj = {
  name: "Puneet",
  lastname: "Jain",
  fullname: function () {
    return `Hey ${this.name} ${this.lastname}`;
  },
};

console.log(obj.fullname());

obj.getFirstName = function () {
  return `${this.name}`;
};

console.log(obj.getFirstName());

console.log(obj);

console.log(obj.hasOwnProperty("name"));

console.log(`#############################`);

let person = {
  name: "John Doe",
  greet: function () {
      return "Hi, I'm " + this.name;
  }
};
console.log(person.__proto__ === Object.prototype)