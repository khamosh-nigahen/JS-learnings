// palindrome permutation

function checkPalindromePermutation(str, checkStr) {
    const sanitized = str.toLowerCase();
    const checkStrSanitized = checkStr.toLowerCase();

    const chars = {}
    sanitized.split("").forEach(char => {
        if (char !== " ") {
            if (chars[char] !== undefined) {
                chars[char] += 1
            } else {
                chars[char] = 1
            }
        }
    })

    checkStrSanitized.split("").forEach(char => {
        if (char !== " ") {
            if (chars[char] !== undefined) {
                chars[char] -= 1
            } else {
                return false
            }
        }
    })

    for (let v of Object.values(chars)) {
        if (v !== 0) {
            return false
        }
    }

    // console.log(chars);
    return true
}

console.log(checkPalindromePermutation("radar", "RADAR"))
console.log(checkPalindromePermutation("taco cat", "atco cta"))
console.log(checkPalindromePermutation("madam aali", "aaaa li mdm"))
console.log(checkPalindromePermutation("testing false", "falsy"))