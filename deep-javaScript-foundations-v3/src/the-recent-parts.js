/**
 * Destructuring
 */

function data() {
    return [1, 2, 3]
}
var [first, second, third] = data()
console.log(first, second, third);

// returned undefined if we didnot get the value
function data1() {
    return [1, 2]
}
var [first, second, third] = data1()
console.log(first, second, third);

// 3rd element is ignored because we didn't assign it to anything
function data2() {
    return [1, 2, 3, 4]
}
var [first, second, third] = data2()
console.log(first, second, third);

// default value when certian value === undefined
function data3() {
    return [1, , 3]
}
var [first, second = 10, third] = data3()
console.log(first, second, third);

function data4() {
    return [1, 2, 3, 4, 5, 6]
}
var [first, second, third, ...fourth] = data4()
console.log(first, second, third, fourth);

function data5() {
    return [1, 2, 3, 4, 5, 6]
}
var [...all] = data5()
console.log(all);

function data6() {
    return [1, 2, 3]
}
var [first, second, third, ...fourth] = data6()
console.log(first, second, third, fourth);

// =======================================================

// object destructurings

function objData() {
    return { a: 1, b: 2, c: 3 }
}

var { a: first, b: second, c: third } = objData()
console.log(first, second, third)

var { a, b, c } = objData()
console.log(a, b, c)

function objData() {
    return { a: 1, c: 3, d: 4 }
}

var { a: first, b: second = "default_value", ...third } = objData()
console.log(first, second, third)

// ==============================================================

/* So the for..of loop and the ...(spread operator) uses iterator protocol behind the scenes
    any data structure which is iterable can use used bu for...of loop  and the ...(spread operator)
*/

// ===========================================================

// generator 

function* main() {
    yield 1
    yield 2
    yield 3
    yield 4
    // return 4 // bad practice to return from a generator
}

let it = main()

console.log(it.next())
console.log(it.next())
console.log(it.next())
console.log(it.next())

console.log([...main()]);

// ==================================================================

function just() {
    const add = 2
}

console.log(just()); // returns undefined if return statement is not present

// ====================================================================

