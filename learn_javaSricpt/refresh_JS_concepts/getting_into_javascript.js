// some basic stuffs to get hands on coding after 10 months off from coding

var name = "Puneet";
var age = 31;
var twitterAcc = "Sarcastic_Punnu";

function whoAmI(firstname, howOld, socialAcc) {
    console.log(`Hey, I am ${firstname} and ${howOld} year's old`, `Twitter acc: ${socialAcc}`);
} 

whoAmI(name, age, twitterAcc);

// some stuff

console.log(3+4)
console.log(43-1);
console.log(!false);
console.log(3.0 == 3);
console.log(3.0 === 3);

// type of data
console.log(typeof 42);
console.log(typeof "Puneet");
console.log(typeof true)
console.log(typeof 34.56)
console.log(typeof undefined)
console.log(typeof null)
console.log(typeof {})
console.log(typeof [1,2,3])
console.log(typeof function () {});

// undefined

var lastname;
var birthplace = null;

console.log(`lastname: ${lastname}`);
console.log(`birthplace: ${birthplace}`);

// array

var friends = ["Rahul Singh", "Madhuri US", "Shaili"]
console.log(friends.length);
console.log(friends[1]);

// add

var age = 31;
age++;
age += 2; // age = age + 2
console.log(age);
age = 1 + age * 2 //  BODMAS rule
console.log(age);

// for loops

let fruts = ["Apple", "Banana", "Kiwi", "Oranges"]

for (let i = 0; i < fruts.length; i++) {
    console.log(`frut ${i}: ${fruts[i]}`);
}

for (let frut of fruts) {
    console.log(frut)
}


// isNaN
var greeting  = "Hello Sir!";
var something = greeting / 2;

console.log(Number.isNaN(something));
console.log(Number.isNaN(greeting)); // why??
console.log(Number.isNaN(function() {})); // why??

// new keyword can be used on Object, Array, Date, RegExp, Function, Error

var today = new Date("September 4, 2023");
console.log(today.toUTCString());

// == loose check (only value)
// === strict check (value + data type)

// map method

var Persons = ["Puneet", "Pranjal", "Kalpana"]

var ids = Persons.map((person) => person);
console.log(ids);

// closure
function ask(question) {
    return function holdYourQuestion() {
        return question
    }
}

var myQuestion = ask("What is your Profession?");

console.log(myQuestion());

// this keyword

var workshop = {
    teacher: "Puneet",
    ask(question) {
        return `${this.teacher}, ${question}`
    },
}

console.log(workshop.ask("What is closure?"));

function askagain(question) {
    return `${this.teacher}, ${question}`
}

function otherClass() {
    var otherWorkshop = {
        teacher: "JainSaab",
    }
    return askagain.call(otherWorkshop, "Why here?")
}

console.log(otherClass());

// prototype

// class

