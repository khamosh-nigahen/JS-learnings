const checkPermutationOfString = require("./sol-2")

test("same frequency of chars", () => {
    expect(checkPermutationOfString("abc", "cba")).toBe(true)
})

test("same frequency of chars", () => {
    expect(checkPermutationOfString("abc", "cbaa")).toBe(false)
})

test("same frequency of chars", () => {
    expect(checkPermutationOfString("dad", "dda")).toBe(true)
})

