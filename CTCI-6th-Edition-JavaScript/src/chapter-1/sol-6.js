// frequency of chars in a string

function frequencyOfChars(str) {
    const strArr = str.toLowerCase().split("")

    uniqueChars = new Set()

    for (let char of strArr) {
        uniqueChars.add(char)
    }
    if (Array.from(uniqueChars).join("").length == strArr.join("").length) {
        return strArr.join("")
    }
    const chars = {}

    strArr.forEach(char => {
        if (chars[char] !== undefined) {
            chars[char] += 1
        } else {
            chars[char] = 1
        }
    })

    console.log(chars);
    let res = []
    for (let [k, v] of Object.entries(chars)) {
        res.push(k)
        res.push(v)
    }

    return res.join("")
}

console.log(frequencyOfChars("aabbcccbazyyyyy"))
console.log(frequencyOfChars("yhsgrbcnj")) 