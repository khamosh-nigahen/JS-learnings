console.log("log from main.js")

class Person {
    constructor(firstName, lastName, dob) {
        this.firstName = firstName;
        this.lastname = lastName;
        this.dob = new Date(dob);
    }

    getBirthYear() {
        return this.dob.getFullYear();
    }

    getFullName() {
        return `${this.firstName} ${this.lastname}`
    }
}

const person1 = new Person('Puneet', 'Jain', '25-7-1992')

console.log(person1)
console.log(person1.getFullName())
console.log(person1.getBirthYear())


console.log(window)
console.log(document.getElementById("intro"))
console.log(document.querySelector(".all"))

