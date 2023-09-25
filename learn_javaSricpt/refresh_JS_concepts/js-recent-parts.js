const objarr = [{a:2}, {b:4}, {c:6}]

const returnVal = objarr.find(function(val) {
    return val && val.a > 1
})

console.log(returnVal);

const index = objarr.findIndex(function(val) {
    return val && val.c > 5
})

console.log(index);

var arr = [10, 20, "Puneet", NaN, {str: "test"}];

console.log(arr.indexOf(10))
console.log(arr.indexOf("Puneet"))
console.log(arr.indexOf(NaN))
console.log(arr.includes(NaN))


const newObj = {
    a:1,
    b:2,
    c:3
}

// "of" operator works on iterable, Object.entries makes the object into 2-D array
for (let [key, val] of Object.entries(newObj)){
    console.log(key, val);
}

console.log(Object.entries(newObj));

// using "in" operator only return keys in object
for (let key in newObj){
    console.log(key, newObj[key]);
}