/**
 * Array Iteration methods
 */

// forEach()
["one", "two", "three"].forEach(function (item, index) {
    console.log(index, item);
})

// map()
const mapArr = [1, 2, 3].map(function (item, index) {
    // console.log(index);
    return item * 2
})
console.log(mapArr);

// filter()
const filterArr = [1, 2, 5, 7, 8, 9].filter(function (item) {
    return item % 2 === 0
})
console.log(filterArr);

// reduce()
const reduceSum = [1, 2, 3].reduce(function (result, item) {
    return result + item
}, 0)
console.log(reduceSum);


// some()
const hasNegativeIntegers = [1, 4, 7, -1, -6, 8].some(function (item) {
    return item < 0
})
console.log(hasNegativeIntegers);

// every()
const hasPositiveIntegers = [1, 4, 7, 8].every(function (item) {
    return item > 0
})
console.log(hasPositiveIntegers);

// find()
const found = [{ id: 3 }, { id: 6 }, { id: 8 }].find(function (item) {
    return item.id === 6
})
console.log(found);

// findIndex()
const foundIndex = [{ id: 3 }, { id: 9 }, { id: 8 }].findIndex(function (item) {
    return item.id === 8
})
console.log(foundIndex);

