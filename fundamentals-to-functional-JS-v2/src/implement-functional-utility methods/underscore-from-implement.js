const _ = {}

_.from = arr => {
    return Array.prototype.slice.call(arr)
}

function add(a, b) {
    console.log(arguments);
    console.log(Array.isArray(arguments));
    const arr = _.from(arguments)
    console.log(Array.isArray(arr));
    console.log(a + b)
}

add(1, 2, 3)
