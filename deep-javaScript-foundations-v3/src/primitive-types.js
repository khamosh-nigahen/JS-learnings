// check the below pdf for detailed information
// https://static.frontendmasters.com/resources/2019-03-07-deep-javascript-v2/deep-js-foundations-v2.pdf


//  ++ operator job is to convert any datatype to a number and adds 1 to it, check for string datatype

// typeof operator always returns a string.. 

// ==============================================

var v = undefined
console.log(undefined ? typeof v : "typeof operator always returns string")
console.log("undefined" ? typeof v : "typeof operator always returns string")

// ==================================================
console.log("=======================");

console.log(typeof doesNotExist);

// var v = doesNotExist + 1
// ===========================================================================

var v = null
console.log(typeof v)
console.log(typeof typeof v)

// So this is a bug in JS 
// so for other variable types u need to remove its value you set it to undefined 
// but with ob objects you set it to null

//============================================

var n = NaN
console.log(n === n)

// NaN is not what we call is "Not A NUmber" but its actually an invalid Number
// NaN is the only value which is not equal to itself
// typeOf NaN is number but its a invalid Number
// =================================================

const teacher = "neha"

const welcome = () => {
    const greet = () => {
        return `Hello ${teacher}`
    }
    return greet
}

const invite = welcome()
console.log(invite())

//================================

// undeclared means the variable doesn't exists
// undefined means the variable is declared but no value is defined to it or assigned to it

//===============================================

// Hosting in JS means that the code has been parsed in the first pass

// =======================================================

/*
Module pattern -> is some kind of encapsulation (data hinding and showing functionality) with the help of closure
 */

/**
 * this keyword:
 * A funtions this reference the executioncontext for that call,
 * determined entirely by "How the function was called"
 *
 * this keyword have no connection with function keyword,
 * the only thing that matters is how does that function gets invoked
 *
 * A this-aware functioncan thus have a different context each time its called
 */

// =====================================================================================

var teach = "Puneet"

function ask(question) {
    console.log(teach, question)
}

function other() {
    var teach = "Pranjal"
    ask("why?")
}

other()

// =================================================================================

var teach = "Puneet"

function ask1(question) {
    console.log(this.teach, question)
}

function other1() {

    var context = {
        teach: "Pranjal"
    }
    ask1.call(context, "why?")
}

other1()

// this exists so that we can call a function in different context


/**
 * The purpose of the new keyword is actually to invoke a function with a this keyword pointing to a
 * whole new empty object
 *
 * lets say we have a function named greet()
 * const obj = new greet() is exaclty same if you do const obj = greet.call({})
 */


// ==============================================================

const name = "Puneet"

function ask(ques) {
    console.log(this.name, ques)
}

function askAgain(ques) {
    // "use strict" // uncomment this line
    console.log(this.name, ques) // here it will throw type Error because ypu have not passed context to it and you are using this in the function
}

ask("How you doing?")
askAgain("How you doing?")

// ====================================================================

/**
 * check screenshot for finding precence of this keyword binding
 */

/**
 * Very important mental model
 *
 * Most people think that arrow fucntion uses "this" of the parent function
 *
 * but what actaully it does is and its better to say it in the below ways
 *
 * arrow functions do not have "this" keyword so whenever arrow functions uses "this"
 * it goes a scope level up and up until it finds a "this" context and can reach to a global scope at last
 * to find its variable
 *
 * this.variable_name is just a variable name to find in scope level up for arrow functions
 *
 */

/**
 * If u call new on a arrow function you will get an exception because you are not allowed to
 * call new on a arrow fucntion
 * Its a function that doesn't define on "this" keyword
 */

/**
 * not always curly braces define scope
 */

/**
 * Only place you should use arrow function is when you want to use lexical this behaviour
 */

/**
 * Arrow function doesnt have prototype property
 * const arrow_func = () => {}
 * arrow_func.prototype  // undefined
 * thats is why u cannot call new keyword on arrow functions.. it doesn't have a constructor
 */

/***
 * So, When you create class based inheritance or instantiation of objects
 * its basically a copy of methods in child objects
 *
 * But in the prototype inheritance its a linkage between object and the upwards to the constructor
 *
 */

