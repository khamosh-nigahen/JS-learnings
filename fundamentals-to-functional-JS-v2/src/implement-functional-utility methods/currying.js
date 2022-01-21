// Below is the problem statement

// var abc = function (a, b) {
//     return [a, b];
// }

// var curried = _.curried(abc);

// curried(1)(2) // returns [1, 2]

const _ = {}


_.curry = (fn) => {
    return (arg1) => {
        return (arg2) => { // arg1 value is used by a closure
            return fn(arg1, arg2) // here we are returning nested fucntions
        }
    }
}

var abc = function (a, b) {
    return [a, b];
}

var curried = _.curry(abc);

console.log(curried(1)(2))