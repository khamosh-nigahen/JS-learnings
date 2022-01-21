"use strict";

var job = "engineer";

console.log(job);

const interface_var = "audio";
console.log(interface_var);

// Arrow func doesn't have this keyword
let whatJob = (job) => {
  console.log(`job: ${job}`);
};

whatJob(job);

const puneet = {
  firstName: "Puneet",
  lastName: "Jain",
  birthYear: 1992,
  hasDriverLicense: true,

  calAge: function () {
    console.log(this);
    return 2021 - this.birthYear;
  },
};

console.log(puneet.calAge());

function printName() {
  const name = "Puneet";
  console.log(name);
  //   console.log(this.name); // will give error beacuse this is undefined in strict mode
  //   console.log(`this.job: ${this.job}`);
}

printName();
console.log(this);

const age = function (birthYear) {
  console.log(birthYear);
  console.log(this);
};

age(4);

const func1 = (a, b) => {
  console.log("################");
  console.log(arguments);
  console.log(a, b);
};

func1(2, 3);

const func2 = function (a, b) {
  console.log(arguments);
  console.log(a, b);
};

func2(3, 4, 5);
