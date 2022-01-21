// functions that take another functions as parameters are Higher orer functions

// abiding DRY principle 

function copyArrayAndManipulate(arr, fn) {
    const output = []
    for (let i = 0; i < arr.length; i++) {
        output.push(fn(arr[i]))
    }
    return output
}

function mutilpyBy2(num) {
    return num * 2
}

console.log(copyArrayAndManipulate([1, 2, 3], mutilpyBy2))

function divideBy2(num) {
    return num / 2
}

console.log(copyArrayAndManipulate([1, 2, 3], divideBy2))

//  the below one is with arrow functions
console.log(copyArrayAndManipulate([1, 2, 3], input => input + 2))

// if u see closely it is behaving as a map function taking an array and apply function to it an returing the same length array


