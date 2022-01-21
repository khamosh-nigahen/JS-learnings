const _ = {}

_.map = function (list, callback) {
    let modifiedArray = [];
    if (Array.isArray(list)) {
        for (let index = 0; index < list.length; index++) {
            modifiedArray.push(callback(list[index], index, list))
        }
        // _.each(list, function (v, i, list) {
        // modifiedArray.push(callback(v, i, list))
        // })
    } else {
        return "Not An Array"
    }
    return modifiedArray
}


// test for Arrays

console.log(_.map(["Puneet", "Pranjal", "Mamma"], function func(name, index, list) {
    return name
}))


//test for object

// _.map({ name: "Puneet Jain", job: "Software developer", language: "JS an Python" }, function func(name, index, list) {
//     console.log(name, index, list)
// })