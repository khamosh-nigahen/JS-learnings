// Encapsulation is another key concept in OOP, and it stands for an object's capacity to "decide" which information it exposes to "the outside" and which it doesn't. 
// Encapsulation is implemented through public and private properties and methods.

// Abstraction is also similar where you just expose methods and properties which will be used by external world do not expose which is not needed.


class Enemy {
    constructor(power, speed) {
        this.power = power
    }
    attack = () => console.log(`I'm attacking with the poer of ${this.power}`)
}

class Alien extends Enemy {
    #birthYear // We first need to declare the private property, always using the '#' symbol as the start of its name.

    constructor (name, phrase, power, speed, birthYear) {
        super(name, phrase, power, speed)
        this.species = "alien"
        this.#birthYear = birthYear // Then we assign its value within the constructor function
    }
    fly = () => console.log("Zzzzzziiiiiinnnnnggggg!!")
    howOld = () => console.log(`I was born in ${this.#birthYear}`) // and use it in the corresponding method.
}
    
// We instantiate the same way we always do
const alien1 = new Alien("Ali", "I'm Ali the alien!", 10, 50, 1992)
alien1.howOld()
console.log(alien1)
console.log(alien1.#birthYear) // because #birthYear is a private property