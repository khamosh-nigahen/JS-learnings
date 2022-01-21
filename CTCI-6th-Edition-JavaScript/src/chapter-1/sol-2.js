// check if the string is one permutation of other string

function checkPermutationOfString(str1, str2) {
    if (str1.length !== str2.length) {
        return false
    }
    arr1 = [...str1].sort()
    arr2 = [...str2].sort()
    return arr1.join("") === arr2.join("")
}

module.exports = checkPermutationOfString