// run the below code in browser as fetch is not defined in node

const printHello = () => {
    console.log("Hello");
}
const setTimeoutPromise = setTimeout(printHello, 1000) // return the setTimeout ID
const fetchPromise = fetch("https://reqres.in/api/users/2")
console.log(`1st: ${setTimeoutPromise}`)
// clearTimeout(setTimeoutPromise) use this to cancel the setTimeout
console.log(`2nd: ${fetchPromise}`)
fetchPromise.then((data) => {
    console.log(data);
})

// =======================================================================

function getData(arr) {
    let i = 0
    function getElement() {
        const element = arr[i]
        i++
        return [element, name]
    }
    const name = "Puneet" // even creating a const after a function the name is attached in the backpack
    return getElement
    // backpack has the link to all the surrounding data in this case i and name
}

const getDataOneByOne = getData([1, 2, 3, 4])
console.log(getDataOneByOne());
console.log(getDataOneByOne());
console.log(getDataOneByOne());
console.log(getDataOneByOne());
console.log(getDataOneByOne());

// ==============================================================================

// Implement Iterators

function getDataUsingNext(arr) {
    let i = 0
    const getElement = {
        next: function () {
            const element = arr[i]
            i++
            return [element, name]
        }
    }
    const name = "Puneet" // even creating a const after a function the name is attached in the backpack
    return getElement
    // backpack has the link to all the surrounding data in this case i and name
}

const getDataOneByOneUsingNext = getDataUsingNext([1, 2, 3, 4])
console.log("========================================================");
console.log(getDataOneByOneUsingNext.next());
console.log(getDataOneByOneUsingNext.next());
console.log(getDataOneByOneUsingNext.next());
console.log(getDataOneByOneUsingNext.next());
console.log(getDataOneByOneUsingNext.next());
console.log(getDataOneByOneUsingNext.next());
console.log(getDataOneByOneUsingNext.next());

// ============================================================================

function* newFlow() {
    yield 1
    yield 2
    yield 3
}

const values = newFlow();
console.log(values.next());
console.log(values.next());
console.log(values.next());
console.log(values.next());
console.log(values.next());
console.log("+++++++++++++++++++++++++++++++++++++++++++++++++++++++===");
// ==================================================================


function* createFlow() {
    const num = 10
    const newNum = yield num
    yield 5 + newNum
    console.log(newNum);
    yield 6
}

const gen = createFlow()
console.log(gen.next());
// we pass 2 here because in the previous call gen.next() newNum is undefined as yeild throw out the 10 
// and newNum was never assigned to a value and when again we called gen.next(2) -> newNUm got valu as 2
// generators suspends the function it doesn't ends it.
//  they start right from the place where they have haulted
console.log(gen.next(2));
console.log(gen.next());
console.log(gen.next());

// =====================================================================================

// Implement async request with Generators and Promise
console.log("$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$");

function doWhenDataReceived(value) {
    returnNextElement.next(value)
}

function* createGenerator() {
    const data = yield fetch("https://reqres.in/api/users/2")
    console.log(data)
}

const returnNextElement = createGenerator()
const futureData = returnNextElement.next()

// futureData.then(doWhenDataReceived)
futureData.value.then(doWhenDataReceived)

// The above code is the implementation of async/await 
// u can implement this for async/await for interviews

// =====================================================================================

// async/await implemnetation of the above code
console.log("%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%55555");

async function getDataFlow() {
    console.log("Me First")
    const data = await fetch("https://reqres.in/api/users/2")
    console.log(data)
}

getDataFlow()

console.log("Me Second")

// await keyword pauses the execution context of getDataFlow and throws back the promise object
// once the execution of all the global code is finised it checks the micro-task queue
// there again it eneters the execution context of getDataFlow because the value property on the 
// promise object is prsent now and continues with the futhur code

// =======================================================================================

