const _ = {}

_.reduce = function (obj, cb, initialValue) {
    for (let attr in obj) {
        // console.log(initialValue, obj[attr], attr)
        initialValue = cb(initialValue, obj[attr], attr)
    }
    return initialValue
}

function keystovalues(result, value, key) {
    (result[value] || (result[value] = [])).push(key)
    return result
}
const res = _.reduce({ a: 1, b: 2, c: 1 }, keystovalues, {})

console.log(res);