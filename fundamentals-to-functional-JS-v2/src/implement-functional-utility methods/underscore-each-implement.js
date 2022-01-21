const _ = {}

_.each = function (list, callback) {
    if (Array.isArray(list)) {
        // for (let element of list) {
        // }
        for (let index = 0; index < list.length; index++) {
            callback(list[index], index, list)
        }
    } else if (typeof list === "object") {
        for (let key in list) {
            callback(list[key], key, list)
        }
    } else {
        return "Not and Array or Object"
    }
    // return callback()
}

// test for Arrays

_.each(["Puneet", "Pranjal", "Mamma"], function func(name, index, list) {
    console.log(name, index, list)
})


//test for object

_.each({ name: "Puneet Jain", job: "Software developer", language: "JS an Python" }, function func(name, index, list) {
    console.log(name, index, list)
})

export default _