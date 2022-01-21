// some examples of closure

const myAlert = () => {
    const x = "Hey, Puneet!"
    const alerter = () => {
        // alert(x) // uncomment this and Run this with browser not with node
        console.log("alert")
    }
    setTimeout(alerter, 1000)
    console.log("Which will be first log or alter?")
}

myAlert()

//=========================================================================

const myFunc = () => {
    let count = 0
    const increment = () => {
        return ++count
    }
    return increment
}

const first = myFunc() // creates a child context from the parent context so count is 0 here
const second = myFunc() // this creates another execution context

// above the both context is different so calling one doesn't effect other

console.log(first());
console.log(first());
console.log(second());
console.log(second());
const third = myFunc()
console.log(third());
console.log(third());
console.log(third());


//===========================================================================


let name = "Puneet"

const greet = () => {
    name = "Puneet Jain"
    const changeName = () => {
        console.log(name)
        name = "Punnu"
        console.log(name)
    }
    return changeName
}

const changed = greet()
changed()
console.log(`new name: ${name}`);

// ===============================================

const murderer = () => {
    const speak = () => {
        return `I am the murderer: ${who}`
    }

    const who = "Media"
    return speak
}

const tellMe = murderer()
console.log(tellMe());


// ====================================================

// very inetresting example 

// run the below one in browser
const makeTimer = () => {
    let elapsed = 0
    const stopwatch = () => elapsed;
    const increase = () => elapsed++;
    setInterval(increase, 1000)
    return stopwatch
}

const timer = makeTimer()
console.log(timer());

// after few seconds 
console.log(timer());

// ===============================================================

