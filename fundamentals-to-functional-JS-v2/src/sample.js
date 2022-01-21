console.log("Ex: 1 ================================================");

var person = {}
person.name = "Mr. Puneet Jain"
console.log(person.name);

var who = person.name; // reference to Mr. Puneet
console.log(who);

person.name = "Mrs. Jain"
console.log(who);
console.log(person.name)

console.log("Ex: 2 ================================================");

var person = []

person.name = "Puneet"

var who = person.name
console.log(who);

console.log(typeof person);
person[0] = "ele1"
console.log(person);
console.log(person[1]);
console.log(person["name"]);
console.log(person.name);

console.log("Ex: 3 ================================================");

let arr = []
arr.name = "Puneet"

arr[0] = 2;
arr[10] = "hello"
console.log(arr);
console.log(arr.length);

console.log("Ex: 4 ================================================");

const obj = {
    x: 1,
    y: () => {
    },
    z: true
}

obj.a = []
console.log(obj);

Object.freeze(obj);

obj.b = "Freeze";
console.log(obj);

console.log("Ex: 5 ================================================");

const objs = [{
    name: "Puneet",
    designation: "software dev"
}, {
    name: "Pranjal",
    designation: "software dev "
}]

for (const obj of objs) {
    console.log(obj)
}

console.log("Ex: 6 ================================================");

function createSuspects(suspect) {
    return {
        name: suspect,
        speak() {
            return "speaks english!"
        }
    }
}

const x = createSuspects("Mr Puneet Jain")
console.log(x);
console.log(x.speak());

console.log("Ex: 7 ================================================");

const colorArr = ["red", "green", "blue", "yellow"]

colorArr.forEach(function printData(value, index, list) {
    console.log(value, index, list)
});

console.log("\nusing uderscore library\n");
const _ = require("underscore")

_.each(colorArr, function printData(value, index, list) {
    console.log(value, index, list)
})

// above _ is an object like this:- const _ = {each: function(){}}

// _.each and forEach does similar things above

console.log("Ex: 8 ================================================");

const sampleObjs = [{
    name: "Puneet",
    designation: "software dev JS"
}, {
    name: "Pranjal",
    designation: "software dev Python "
},
{
    name: "Rahul",
    designation: "software dev C "
}]

_.each(sampleObjs, function printData(value, index, list) {
    console.log(value, index, list)
})

console.log("\nusing forEach \n");
sampleObjs.forEach(function printData(value, index, list) {
    console.log(value, index, list)
})

// So basically _.each and forEach works similar on both arrays and objects

console.log("Ex: 9 ================================================");
