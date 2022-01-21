var teacher = "rachna"

function hey() {
    teacher = "dileep";
    topic = "science";
    console.log("Welcome")
}

hey();
console.log(teacher);
console.log(topic);

// In the above scenario as we have not declared topic is internally use var as keyword and sits in the global scope

// ==============================================================================================

// undeclared VS undefined 
// undeclared means no declaration but undefined means its declared but not defined

// ===========================================================
// The below code can be replaced by ES6 classes.

function Person(name) {
    this.personName = name;
    const occupation = "developers"
    console.log(occupation)
}

Person.prototype.greet = function () {
    return `Hello ${this.personName}`
}

const person1 = new Person("Puneet Jain");
console.log(person1)
console.log(person1.greet())

const person2 = new Person("Pranjal Jain");
console.log(person2)
console.log(person2.greet())

// ====================================================================================

// setTimeout in for loop 
for (let i = 0; i <= 5; i++) {
    setTimeout(() => { console.log(`${i}`); }, 1000);
};

// ===================================================

