/**
 * Array methods
 */

const arr = ["a", "b", "c", 2, 4]

// push()
arr.push("new_Ele")
console.log(arr);

// pop()
arr.pop()
console.log(arr);

// concat()
const arr2 = ["d", "e"]
console.log(arr.concat(arr2)); // returns a new array, does not change the original array
console.log([...arr, ...arr2]);
// join()
console.log(arr.join("!")); // does not chnage the original array

// reverse()
console.log(arr.reverse()); // modifies the original array

// shift()
console.log(arr.shift()); // removes the 1st element of arr andreturns it

// unshift()
console.log(arr.unshift("p")); // adds "p" to the 0th index and return length of the array

// slice()
console.log(arr.slice(1, 2)); // doesnot chnage the original array

// sort()
arr.push("y")
arr.push("r")
arr.push("bue")
console.log(arr.sort()); // modifies the original array

// splice()
console.log(arr.splice(2, 2, "Added element")); // modifies the original array
// starts at index 2, removes 2 element from index 2 and third argumnet adds element at index 2

console.log(arr);

// copy array
const shallowArr = [1, "Mr.", { "she": 1 }, 8, [4, 5]]
const arrCopy = shallowArr.slice()
console.log(arrCopy);
const arrCopy2 = [...shallowArr]
console.log(arrCopy2);
shallowArr[4][0] = 10
console.log(arrCopy2);

// deep copy Array
const numbers = [1, [2], [3, [4]], 5];
// Using JavaScript
const deepNumbers = JSON.parse(JSON.stringify(numbers));
console.log(deepNumbers);
// Using Lodash
// _.cloneDeep(numbers);


for (let i of arr) {
    console.log(i);
}

const obj = {
    name: "Puneet",
    age: 29,
    greet: function () { }
}

for (let i in obj) {
    console.log(i);
}

// REST operator, just opposite to SPREAD operator
// REST operator consdense multiple elements into an array
function multiply(multiplier, ...theArgs) {
    return theArgs.map(function (item) {
        return multiplier * item
    })
}

console.log(multiply(2, 1, 2, 3));