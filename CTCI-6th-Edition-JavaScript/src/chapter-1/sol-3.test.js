const urlify = require("./sol-3")

test("urlify the string passed with %20", () => {
    expect(urlify("Mr. Puneet Jain  ")).toBe("Mr.%20Puneet%20Jain")
})

test("urlify the string passed with %20", () => {
    expect(urlify("    Mr. Puneet Jain  ")).toBe("Mr.%20Puneet%20Jain")
})

test("urlify the string passed with %20", () => {
    expect(urlify("Mr. Puneet  Jain")).toBe("Mr.%20Puneet%20%20Jain")
})

