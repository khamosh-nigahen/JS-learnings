// Substring with only one call to function

function isSubString(str1, str2) {
    const strArr = str1.split("")
    const str2Arr = str2.split("")

    let newArray = str2Arr.slice()

    let count = 0
    for (let char of str2Arr) {
        if (char === strArr[0 + count]) {
            count += 1
            continue
        } else {
            newArray.splice(0, 1)
            newArray.push(char)
        }
    }
    console.log(strArr.join(""));
    console.log(newArray.join(""));

    return strArr.join("") === newArray.join("")
}

console.log(isSubString("waterbottle", "erbottlewat"));
console.log(isSubString("waterbottle", "testing"));