// check if a string containes unique chars

function checkUniqueChars(str) {
    uniqueChars = {}
    for (let i = 0; i < str.length; i++) {
        if (uniqueChars.hasOwnProperty(str[i])) {
            return false
        } else {
            uniqueChars[str[i]] = 1
        }
    }
    return true
}

// TODO: implement it without using any Data Structures

module.exports = checkUniqueChars;
