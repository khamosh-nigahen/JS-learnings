const checkUniqueChars = require("./sol-1")

test("check if string has unique chars", () => {
    expect(checkUniqueChars("abcd")).toBe(true)
})

test("check if string has unique chars", () => {
    expect(checkUniqueChars("radar")).toBe(false)
})

test("check if string has unique chars", () => {
    expect(checkUniqueChars("test")).toBe(false)
})

test("check if string has unique chars", () => {
    expect(checkUniqueChars("Sonar")).toBe(true)
})

test("check if string has unique chars", () => {
    expect(checkUniqueChars("Developer")).toBe(false)
})