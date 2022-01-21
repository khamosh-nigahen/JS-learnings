"use strict";

const Person = function (firstName, birthYear) {
  console.log(this);
  // instance properties
  this.firstName = firstName;
  this.birthYear = birthYear;
  console.log(this);
};

new Person("Jones", 1991);

// thinsg happen behind the scene
// 1. New {} (empty object) is created
// 2. function is called, this = {}
// 3. {} is linked to prototype
// function automatically returns {}
