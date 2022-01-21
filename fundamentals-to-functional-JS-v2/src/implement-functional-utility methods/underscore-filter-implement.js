const _ = {}


//  we can also use _.each instaed of for loop .. thats also works good

_.filter = function (list, cb) {
    const storage = [];
    if (Array.isArray(list)) {
        for (let i = 0; i < list.length; i++) {
            if (cb(list[i], i, list) === true) {
                storage.push(list[i])
            }
        }
    } else {
        return "Not an Array"
    }
    return storage
}

// test filter

const res = _.filter([1, 2, 3, 4, 5, 6, 7, 8], function func(num, index, list) {
    if (num % 2 == 0) {
        return true
    } else {
        return false
    }
})

console.log(res)