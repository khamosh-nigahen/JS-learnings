// Create objects using a fucntion

function userCreator(name, score) {
    const newUser = {}
    newUser.name = name
    newUser.score = score
    newUser.increment = function () {
        newUser.score++
    }
    return newUser
}

const user1 = userCreator("Puneet", 5)
const user2 = userCreator("Pranjal", 10)

console.log(user1)
console.log(user2)

// The above approach is not a good design because each object has a copy of increment fucntion which basically
// does teh same thing(increse score). Hence, waste of memory
// we also cannot add any new fucntionality to it

console.log("#######################################")

// create objects using Object.create() method

const user3 = Object.create(null) // return a null object
console.log(user3)

const user4 = Object.create({ name: "Puneet", greet: function () { return `Hello ${this.name}` } })
// above code return a null object and the argumnet object we passed gets into the prototype property
console.log(user4)
console.log(user4.name)
console.log(user4.greet())

console.log("#######################################")

const userCreator2 = function (name, score) {
    const newUser = Object.create(userFunctionStore)
    newUser.name = name
    newUser.score = score
    return newUser
}

const userFunctionStore = {
    increment: function () { this.score++ },
    login: function () { console.log("Logged In") }
}
const user5 = userCreator2("Puneet", 10)
const user6 = userCreator2("Pranjal", 5)
console.log(user5)
console.log(user6.increment())
console.log(user6)


/**
 *  the above code does the job of the new keyword
 * New keyword does below four things
 * 1) create a newUser object. "this" to a new empty object (taking the exmple of above case)
 * 2) gives us "this" keyword to access newUser.name and newUser.score so that we can do this.name and this.score
 * 3) attaching methods increment and login to the __proto__ property by linking __proto__ to userCreator.prtotype object 
 * 4) returning the newly created object
 */

console.log("#######################################")

//using the new keyword and the prototype property

const UserCreator3 = function (name, score) {
    this.name = name
    this.score = score
}

UserCreator3.prototype.increment = function () {
    this.score++
}

UserCreator3.prototype.login = function () {
    console.log("Loggen In")
}

const user7 = new UserCreator3("Puneet", "10")
user7.increment()
console.log(user7);

/**
 * So here, user7 will be something like below
 * 
 * user7 = {
 *  name: "Puneet"
 *  score: "10"
 *  __proto__ = UserCreator3.prototype 
 * }
 * 
 * So above __proto__ of object is Linked to userCreator.prototype object
 */

/**
 * Whenever you create a function in JavaScript. It is a function and well as object
 * So function is basic function but the object has a proprty in it which is prototype
 * you can attach variables/methods to function.prototype
 */

/**
 * in the above code example we have used first letter of a fucntion as Upper case
 * to let know fellow developers that this particular function needs a new keyword to call
 *
 */

/**
 * Thumb rule:
 * if "this" is not defined in any executin context then this is assigned to the global window object
 */

/**
 * Caling functions inside a method, will create issuf if u have not assigned "this" correctly
 * In this case use arrow functions
 */

/**
 * All objects by default have __proto__
 * __proto__ is by default linked to Object.prototype (the final or last in chain -> Object )
 */

console.log("#######################################")

// subclassing in solution 2

function userCreator4(name, score) {
    const newUser = Object.create(userFunctions)
    newUser.name = name
    newUser.score = score
    return newUser
}

const userFunctions = {
    sayName: function () {
        console.log(`I'm ${this.name}`)
    },

    increment: function () {
        this.score++
    }
}

const normalUser = userCreator4("Puneet", 4)
normalUser.sayName()

function paidUserCreator(paidName, paidScore, accountBalance) {
    const paidUser = userCreator4(paidName, paidScore)
    console.log(paidUser.__proto__)
    Object.setPrototypeOf(paidUser, paidUserFunctions)
    paidUser.accountBalance = accountBalance
    return paidUser
}

const paidUserFunctions = {
    increaseBalance: function () {
        this.accountBalance++
    }
}

Object.setPrototypeOf(paidUserFunctions, userFunctions)

const paidUser1 = paidUserCreator("Punnu", 5, 10)
console.log(paidUser1.__proto__)
console.log(paidUser1.__proto__.__proto__)
console.log(paidUser1.__proto__.__proto__.__proto__)

paidUser1.increaseBalance()
console.log(paidUser1.accountBalance);
paidUser1.increment()
console.log(paidUser1.score);
paidUser1.sayName()

console.log("#######################################")

