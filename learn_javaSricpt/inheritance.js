class Character {
    constructor(speed) {
        this.speed = speed
    }

    move = () => console.log(`I am moving at the speed of ${this.speed}`)
}

class Enemy extends Character{
    constructor(power, speed) {
        super(speed)
        this.power = power
    }
    attack = () => console.log(`I'm attacking with the poer of ${this.power}`)
}

class Alien extends Enemy {
    constructor(name, phrase, power, speed) {
        super(power, speed) // super must be called before any other class variable assignment
        this.name = name
        this.phrase = phrase
        this.species = 'Alien'
    }
    fly = () => console.log("ZZzzzigggggggg!!")
    sayPhrase = () => console.log(this.phrase)
}


const alien1 = new Alien("Ali", "I'm Ali the alien!", 10, '50kmph')
const alien2 = new Alien("Lien", "Run for your lives!", 15, '65kmph')

alien1.attack() // output: I'm attacking with a power of 10!
console.log(alien2.power) // output: 15
alien1.move()

// If a child class inherits any properties from a parent class, it must first assign the parent properties calling the super() function before assigning its own properties.

// JS doesn't support multilevel inheritance but there are hacks for it like mixins

// By default child instance will have all the proprties and methods of parent class but if you want selected ones we can use composition.

