// one-way

function checkOneWay(str1, str2) {
    if (str1.length === str2.length) {
        return checkOneDiff(str1, str2)
    }
    return addOrRemoveOneDiff(str1, str2) || addOrRemoveOneDiff(str2, str1)
}

function checkOneDiff(str1, str2) {
    let diffCount = 0
    const str1Arr = str1.split("")
    const str2Arr = str2.split("")
    for (let [index, char] of str1Arr.entries()) {
        if (diffCount > 1) {
            break
        }
        if (char !== str2Arr[index]) {
            str2Arr[index] = char
            diffCount += 1
        }
    }
    return ((diffCount > 1) ? false : true)
}

function addOrRemoveOneDiff(str1, str2) {
    let changed = 0
    let str1Arr = str1.split("")
    let str2Arr = str2.split("")
    for (let [index, char] of str1Arr.entries()) {
        if (changed > 1) {
            break
        }
        if (char !== str2Arr[index]) {
            const head = str2Arr.slice(0, index)
            const tail = str2Arr.slice(index)
            head.push(char)
            str2Arr = head.concat(tail)
            changed += 1
        }
    }
    return ((changed > 1) ? false : true)
}
console.log(checkOneWay("pale", "bale"));
console.log(checkOneWay("pale", "baoe"));
console.log(checkOneWay("pale", "ple"));
console.log(checkOneWay("pale", "pl"));
console.log(checkOneWay("pales", "pale"));
console.log(checkOneWay("pale", "bake"));